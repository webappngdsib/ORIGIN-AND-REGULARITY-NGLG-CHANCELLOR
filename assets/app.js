/* NGLG — Origin and Regularity · page logic */
(function () {
  "use strict";

  var I18N = window.NGLG_I18N;
  var REC = window.NGLG_RECOGNITIONS;
  var LANGS = ["en", "es", "pt"];
  var LI = { en: 0, es: 1, pt: 2 };
  var REGION_ORDER = ["europe", "africa", "asia", "americas", "south"];
  var HOME_GL = { 1: true, 2: true };
  var EMBLEMS = {
    ugle: { src: "assets/emblems/united-grand-lodge-england.png", alt: "Emblem of the United Grand Lodge of England" },
    ireland: { src: "assets/emblems/grand-lodge-ireland.png", alt: "Emblem of the Grand Lodge of Ireland" },
    scotland: { src: "assets/emblems/grand-lodge-scotland.png", alt: "Emblem of the Grand Lodge of Scotland" }
  };
  // Timeline entries (by position): 8 Sep 1993 UGLE, 1 Oct 1994 Ireland, 4 May 1995 Scotland
  var TIMELINE_EMBLEMS = { 1: "ugle", 5: "ireland", 6: "scotland" };
  var REGISTER_EMBLEMS = { 1: "ireland", 2: "scotland" };
  // Supporting document for a timeline entry (by position): 1993 UGLE recognition letter
  var UGLE_DOC_URL = "https://drive.google.com/file/d/1taK4-_1Lhn_Anq8r-OJTJQvV6BrJjemy/view?usp=sharing";
  var TIMELINE_DOCS = { 1: { src: "assets/documents/ugle-recognition-1993.jpg", url: UGLE_DOC_URL } };
  var CH_IDS = ["summary", "principles", "origin", "recognition", "today", "temples", "register", "charity", "attestation"];
  var STAMPS = ["sheet-figure", "stamp-parthenon", "stamp-figure", "sheet-parthenon"];
  var lang = "en";
  var T = I18N.en;

  function $(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function store(k, v) {
    try { if (v === undefined) return localStorage.getItem(k); if (v === null) localStorage.removeItem(k); else localStorage.setItem(k, v); }
    catch (e) { return null; }
    return null;
  }

  /* ---------------- language ---------------- */
  function pickInitialLang() {
    var q = new URLSearchParams(location.search).get("lang");
    if (q && LANGS.indexOf(q) > -1) return q;
    var s = store("nglg.lang");
    if (s && LANGS.indexOf(s) > -1) return s;
    var n = (navigator.language || "en").slice(0, 2).toLowerCase();
    return n === "es" ? "es" : n === "pt" ? "pt" : "en";
  }

  function setLang(l) {
    lang = l; T = I18N[l];
    document.documentElement.lang = T.htmlLang;
    document.title = T.docTitle;
    store("nglg.lang", l);
    var btns = document.querySelectorAll("#langGroup button");
    for (var i = 0; i < btns.length; i++) btns[i].setAttribute("aria-pressed", btns[i].dataset.lang === l ? "true" : "false");
    render();
  }

  /* ---------------- rendering ---------------- */
  function render() {
    var nodes = document.querySelectorAll("[data-t]");
    for (var i = 0; i < nodes.length; i++) {
      var v = T[nodes[i].dataset.t];
      if (v !== undefined) nodes[i].innerHTML = v;
    }
    var lists = document.querySelectorAll("[data-list]");
    for (var j = 0; j < lists.length; j++) {
      lists[j].innerHTML = (T[lists[j].dataset.list] || []).map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("");
    }

    // chapter numbers
    var chs = document.querySelectorAll("section.chapter");
    for (var c = 0; c < chs.length; c++) chs[c].querySelector(".ch-num").textContent = T.chapter + " " + chs[c].dataset.ch;

    // nav + contents
    $("navLinks").innerHTML = CH_IDS.map(function (id, k) { return '<a href="#' + id + '">' + esc(T.nav[k]) + "</a>"; }).join("");
    var toc = "";
    for (var t = 0; t < chs.length; t++) {
      var h2 = chs[t].querySelector("h2").textContent;
      var ey = chs[t].querySelector(".eyebrow").textContent;
      toc += '<li><span class="n">' + toRoman(+chs[t].dataset.ch) + '</span><a href="#' + chs[t].id + '">' + esc(h2) + '</a><span class="ey">' + esc(ey) + "</span></li>";
    }
    $("tocList").innerHTML = toc;

    $("coverStats").innerHTML = pairs(T.coverStats, "div");
    $("sumStats").innerHTML = pairs(T.sumStats, "div");

    $("principlesList").innerHTML = T.principles.map(function (p, k) {
      return '<li><span class="num">' + (k + 1) + "</span><div><h4>" + esc(p[0]) + "</h4><p>" + esc(p[1]) + "</p></div></li>";
    }).join("");
    $("conductList").innerHTML = T.conduct.map(card).join("");

    $("foundersList").innerHTML = window.NGLG_FOUNDERS.map(function (f) {
      return '<div class="founder"><div class="no">' + T.lodgeNo + " " + f[0] + '</div><div class="nm">' + esc(f[1]) + '</div><div class="ct">' + esc(city(f[2])) + "</div></div>";
    }).join("");

    $("timelineList").innerHTML = T.timeline.map(function (x, k) {
      var em = TIMELINE_EMBLEMS[k];
      var doc = TIMELINE_DOCS[k];
      var text = doc ? '<a class="tl-link" href="' + doc.url + '" target="_blank" rel="noopener">' + esc(x[1]) + "</a>" : esc(x[1]);
      var body = '<div class="yr">' + esc(x[0]) + "</div><p>" + text + "</p>";
      if (doc) body += '<a class="tl-doc" href="' + doc.url + '" target="_blank" rel="noopener"><img src="' + doc.src +
        '" alt="' + esc(T.ugleDocCap) + '" loading="lazy"><span class="tl-doc-cap"><em>' + esc(T.ugleDocCap) +
        '</em><span class="tl-doc-go">' + esc(T.ugleDocLink) + " ↗</span></span></a>";
      if (!em) return "<li>" + body + "</li>";
      return '<li class="has-emblem"><div class="tl-text">' + body + '</div><img class="tl-emblem" src="' + EMBLEMS[em].src +
        '" alt="' + esc(EMBLEMS[em].alt) + '" loading="lazy"></li>';
    }).join("");

    $("tilesList").innerHTML = T.tiles.map(function (x) {
      return '<div class="tile"><b>' + esc(x[0]) + '</b><div class="l">' + esc(x[1]) + '</div><div class="s">' + esc(x[2]) + "</div></div>";
    }).join("");

    var gms = window.NGLG_GRAND_MASTERS;
    $("gmList").innerHTML = gms.map(function (g, k) {
      return '<li class="' + (k === gms.length - 1 ? "current" : "") + '"><span class="t">' + esc(g[0]) + "</span><span>" + esc(g[1]) + "</span></li>";
    }).join("");

    $("stampsList").innerHTML = STAMPS.map(function (n, k) {
      return '<figure class="' + (n.indexOf("sheet") === 0 ? "sheet" : "stamp") + '"><img src="assets/photos/stamps/' + n +
        '.jpg" alt="" loading="lazy"><figcaption>' + esc(T.stampCaps[k]) + "</figcaption></figure>";
    }).join("");

    renderTemples();
    $("templeGallery").innerHTML = (window.NGLG_TEMPLE_GALLERY || []).map(function (src) {
      return '<figure><img src="' + esc(src) + '" alt="" loading="lazy"></figure>';
    }).join("");
    renderRegister();

    $("pillarsList").innerHTML = T.pillars.map(function (p, k) {
      return '<div class="pillar"><div class="num">' + toRoman(k + 1) + "</div><h4>" + esc(p[0]) + "</h4><p>" + esc(p[1]) + "</p></div>";
    }).join("");

    $("contactList").innerHTML = T.contact.map(function (c) { return "<dt>" + esc(c[0]) + "</dt><dd>" + esc(c[1]) + "</dd>"; }).join("");

    $("sigDate").textContent = new Date().toLocaleDateString(T.htmlLang, { day: "numeric", month: "long", year: "numeric" });
    $("regSearch").placeholder = T.regSearch;
    $("btnLetter").href = "letter.html?lang=" + lang;

    renderPhotos();
    setRunningFooter();
  }

  function pairs(arr, tag) {
    return arr.map(function (x) { return "<" + tag + "><b>" + esc(x[0]) + "</b><span>" + esc(x[1]) + "</span></" + tag + ">"; }).join("");
  }
  function card(x) { return '<article class="card"><h4>' + esc(x[0]) + "</h4><p>" + esc(x[1]) + "</p></article>"; }
  function city(key) { var c = window.NGLG_CITIES[key]; return c ? c[LI[lang]] : key; }
  function toRoman(n) {
    var m = [[10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]], r = "";
    for (var i = 0; i < m.length; i++) while (n >= m[i][0]) { r += m[i][1]; n -= m[i][0]; }
    return r;
  }

  /* ---------------- temples ---------------- */
  var TEMPLE_ICON = '<svg viewBox="0 0 64 56" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 18 32 4l28 14z"/><path d="M8 18h48M10 22h44"/><path d="M14 22v24M24 22v24M40 22v24M50 22v24"/><path d="M8 46h48M4 51h56"/><path d="M28 12h8" stroke-linecap="round"/></svg>';

  function renderTemples() {
    $("templesList").innerHTML = window.NGLG_TEMPLES.map(function (t, k) {
      var img = t.photo
        ? '<img src="' + esc(t.photo) + '" alt="" loading="lazy" onerror="this.remove()">'
        : TEMPLE_ICON;
      return '<article class="temple"><div class="temple-img"><span class="idx">' + String(k + 1).padStart(2, "0") + "</span>" + img +
        '</div><div class="temple-body"><div class="w">' + esc(T.templeWord) + "</div><h4>" + esc(city(t.city)) +
        '</h4><div class="gr">' + esc(t.gr) + "</div>" +
        (t.ref ? '<span class="ref">' + esc(T.templeRef) + " " + esc(t.ref) + "</span>" : "") +
        "</div></article>";
    }).join("");
  }

  /* ---------------- recognitions register ---------------- */
  function countryName(c) { var x = window.NGLG_COUNTRIES[c]; return x ? x[LI[lang]] : c; }
  function norm(s) { return String(s).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase(); }

  function renderRegister() {
    $("regHead").innerHTML = T.regCols.map(function (c) { return "<th>" + esc(c) + "</th>"; }).join("");

    var byRegion = {};
    REC.forEach(function (r) { (byRegion[r[1]] = byRegion[r[1]] || []).push(r); });

    var max = 0;
    REGION_ORDER.forEach(function (g) { max = Math.max(max, (byRegion[g] || []).length); });
    $("regionChart").innerHTML = '<h3 class="sub-head" style="margin-top:0">' + esc(T.chartTitle) + "</h3>" +
      REGION_ORDER.map(function (g) {
        var n = (byRegion[g] || []).length;
        return '<div class="rc-row"><span class="lbl">' + esc(T.regions[g]) + '</span><div class="rc-track"><div class="rc-fill" style="width:' +
          (n / max * 100).toFixed(1) + '%"></div></div><span class="v">' + n + "</span></div>";
      }).join("");

    var html = "";
    REGION_ORDER.forEach(function (g) {
      var rows = byRegion[g] || [];
      html += '<tr class="region" data-region="' + g + '"><td colspan="3">' + esc(T.regions[g]) + "<span>" + rows.length + "</span></td></tr>";
      rows.forEach(function (r) {
        var cn = countryName(r[2]);
        html += '<tr data-region="' + g + '" data-q="' + esc(norm(r[0] + " " + cn + " " + r[2] + " " + r[3])) + '"><td class="no">' + r[0] +
          '</td><td class="ct">' + esc(cn) + "</td><td class=\"gl\">" + (REGISTER_EMBLEMS[r[0]] ? '<img class="reg-emblem" src="' + EMBLEMS[REGISTER_EMBLEMS[r[0]]].src + '" alt="">' : "") + esc(r[3]) +
          (HOME_GL[r[0]] ? '<span class="home">' + esc(T.homeGL) + "</span>" : "") + "</td></tr>";
      });
    });
    html += '<tr class="empty" hidden><td colspan="3">' + esc(T.regNone) + "</td></tr>";
    $("regBody").innerHTML = html;
    filterRegister();
  }

  function filterRegister() {
    var q = norm($("regSearch").value.trim());
    var rows = $("regBody").querySelectorAll("tr[data-q]");
    var shown = 0, perRegion = {};
    for (var i = 0; i < rows.length; i++) {
      var ok = !q || rows[i].dataset.q.indexOf(q) > -1;
      rows[i].classList.toggle("hidden", !ok);
      rows[i].style.display = ok ? "" : "none";
      if (ok) { shown++; perRegion[rows[i].dataset.region] = true; }
    }
    var heads = $("regBody").querySelectorAll("tr.region");
    for (var h = 0; h < heads.length; h++) {
      var vis = !q || perRegion[heads[h].dataset.region];
      heads[h].classList.toggle("hidden", !vis);
      heads[h].style.display = vis ? "" : "none";
    }
    $("regBody").querySelector("tr.empty").hidden = shown > 0;
    $("regCount").textContent = T.regCount.replace("{n}", shown);
  }

  // The PDF always contains the complete register, whatever the search.
  function showFullRegisterForPrint() {
    var rows = $("regBody").querySelectorAll("tr[data-region]");
    for (var i = 0; i < rows.length; i++) rows[i].style.display = "";
    $("regBody").querySelector("tr.empty").hidden = true;
  }

  /* ---------------- photos ---------------- */
  var CAMERA = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M3 8a2 2 0 0 1 2-2h2.5l1.5-2h6l1.5 2H19a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><circle cx="12" cy="13" r="3.6"/></svg>';
  var pendingSlot = null;
  var missingDefault = {};

  function renderPhotos() {
    var figs = document.querySelectorAll("figure[data-slot]");
    for (var i = 0; i < figs.length; i++) renderPhoto(figs[i]);
  }

  function renderPhoto(fig) {
    var slot = fig.dataset.slot;
    var box = fig.querySelector(".photo-box");
    var saved = store("nglg.photo." + slot);
    var src = saved || (missingDefault[slot] ? "" : fig.dataset.default);
    var hint = slot === "meeting" ? T.photoWideHint : T.photoPortraitHint;

    if (src) {
      box.innerHTML = '<img alt="">' +
        '<div class="photo-actions"><button type="button" data-act="pick">' + esc(T.photoChange) + "</button>" +
        (saved ? '<button type="button" class="alt" data-act="remove">' + esc(T.photoRemove) + "</button>" : "") + "</div>";
      var img = box.querySelector("img");
      img.onerror = function () { if (!saved) { missingDefault[slot] = true; renderPhoto(fig); } };
      img.src = src;
    } else {
      box.innerHTML = '<div class="photo-empty">' + CAMERA + "<span>" + esc(hint) + '</span><button type="button" data-act="pick">' + esc(T.photoAdd) + "</button></div>";
    }
  }

  function onPhotoClick(e) {
    var b = e.target.closest("button[data-act]");
    if (!b) return;
    var fig = b.closest("figure[data-slot]");
    if (b.dataset.act === "pick") { pendingSlot = fig; $("photoInput").value = ""; $("photoInput").click(); }
    if (b.dataset.act === "remove") { store("nglg.photo." + fig.dataset.slot, null); renderPhoto(fig); }
  }

  function onPhotoChosen() {
    var f = $("photoInput").files[0];
    if (!f || !pendingSlot) return;
    var fig = pendingSlot;
    var maxW = fig.dataset.slot === "meeting" ? 2400 : 1000;
    var reader = new FileReader();
    reader.onload = function () {
      var im = new Image();
      im.onload = function () {
        var scale = Math.min(1, maxW / im.width);
        var cv = document.createElement("canvas");
        cv.width = Math.round(im.width * scale); cv.height = Math.round(im.height * scale);
        cv.getContext("2d").drawImage(im, 0, 0, cv.width, cv.height);
        var data = cv.toDataURL("image/jpeg", 0.86);
        store("nglg.photo." + fig.dataset.slot, data);
        if (!store("nglg.photo." + fig.dataset.slot)) {
          // storage unavailable or full: show the photo for this session only
          var box = fig.querySelector(".photo-box");
          box.innerHTML = '<img alt=""><div class="photo-actions"><button type="button" data-act="pick">' + esc(T.photoChange) + "</button></div>";
          box.querySelector("img").src = data;
        } else {
          renderPhoto(fig);
        }
      };
      im.src = reader.result;
    };
    reader.readAsDataURL(f);
  }

  /* ---------------- print footer (A4) ---------------- */
  function cssStr(s) { return '"' + String(s).replace(/\\/g, "\\\\").replace(/"/g, '\\"') + '"'; }
  function setRunningFooter() {
    $("pageRunStyle").textContent =
      "@page{@bottom-left{content:" + cssStr(T.runFooter) + ";font-family:'EB Garamond',Georgia,serif;font-size:8pt;color:#5E6170;}" +
      "@bottom-right{content:counter(page) ' / ' counter(pages);font-family:'Cinzel',Georgia,serif;font-size:8pt;color:#B08A2E;}" +
      "@top-right{content:'NGLG';font-family:'Cinzel',Georgia,serif;font-size:7.5pt;letter-spacing:2pt;color:#B08A2E;}}" +
      "@page :first{@bottom-left{content:none}@bottom-right{content:none}@top-right{content:none}}";
  }

  /* ---------------- wire up ---------------- */
  document.addEventListener("DOMContentLoaded", function () {
    $("langGroup").addEventListener("click", function (e) {
      var b = e.target.closest("button[data-lang]");
      if (b) setLang(b.dataset.lang);
    });
    $("regSearch").addEventListener("input", filterRegister);
    $("btnPrint").addEventListener("click", function () { window.print(); });
    window.addEventListener("beforeprint", showFullRegisterForPrint);
    window.addEventListener("afterprint", filterRegister);
    document.addEventListener("click", onPhotoClick);
    $("photoInput").addEventListener("change", onPhotoChosen);
    setLang(pickInitialLang());
  });
})();
