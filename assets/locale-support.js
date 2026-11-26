/* Local geographic labels and bidirectional isolation. No translation service. */
(function () {
"use strict";
var cities = {
 athens:["אתונה","アテネ"],athens2:["אתונה II","アテネ II"],piraeus:["פיראוס","ピレウス"],thessaloniki:["סלוניקי","テッサロニキ"],patras:["פטרס","パトラ"],corfu1:["קורפו I","コルフ I"],corfu2:["קורפו II","コルフ II"],corfu3:["קורפו III","コルフ III"],rhodes:["רודוס","ロードス"],zakynthos:["זקינתוס","ザキントス"],kalamata:["קלמטה","カラマタ"],lamia:["למיה","ラミア"],larissa:["לריסה","ラリサ"],santorini:["סנטוריני","サントリーニ"],lefkada:["לפקדה","レフカダ"],kavala:["קוואלה","カヴァラ"],ioannina:["יואנינה","ヨアニナ"],syros:["סירוס","シロス"],mykonos:["מיקונוס","ミコノス"],cyprus:["קפריסין","キプロス"],chios:["האי כיוס","ヒオス島"]
};
var countries = {
 IRELAND:["אירלנד","アイルランド"],SCOTLAND:["סקוטלנד","スコットランド"],ITALY:["איטליה","イタリア"],ESTONIA:["אסטוניה","エストニア"],LATVIA:["לטביה","ラトビア"],MONACO:["מונקו","モナコ"],ALBANIA:["אלבניה","アルバニア"],GEORGIA:["גאורגיה","ジョージア"],LIBERIA:["ליבריה","リベリア"],"SOUTH AFRICA":["דרום אפריקה","南アフリカ"],"IVORY COAST":["חוף השנהב","コートジボワール"],CONGO:["קונגו","コンゴ"],GHANA:["גאנה","ガーナ"],NIGERIA:["ניגריה","ナイジェリア"],"BURKINA FASO":["בורקינה פאסו","ブルキナファソ"],MALI:["מאלי","マリ"],NIGER:["ניז׳ר","ニジェール"],BENIN:["בנין","ベナン"],GUINEA:["גינאה","ギニア"],GABON:["גבון","ガボン"],"TOGOLESE REPUBLIC":["טוגו","トーゴ"],KAZAKHSTAN:["קזחסטן","カザフスタン"],PHILIPPINES:["הפיליפינים","フィリピン"],CANADA:["קנדה","カナダ"],USA:["ארצות הברית","アメリカ合衆国"],BELIZE:["בליז","ベリーズ"],GUATEMALA:["גואטמלה","グアテマラ"],"EL SALVADOR":["אל סלוודור","エルサルバドル"],NICARAGUA:["ניקרגואה","ニカラグア"],HONDURAS:["הונדורס","ホンジュラス"],MEXICO:["מקסיקו","メキシコ"],BARBADOS:["ברבדוס","バルバドス"],"PUERTO RICO":["פוארטו ריקו","プエルトリコ"],"DOMINICAN REPUBLIC":["הרפובליקה הדומיניקנית","ドミニカ共和国"],BRAZIL:["ברזיל","ブラジル"],COLOMBIA:["קולומביה","コロンビア"],PERU:["פרו","ペルー"],ECUADOR:["אקוודור","エクアドル"],VENEZUELA:["ונצואלה","ベネズエラ"],BOLIVIA:["בוליביה","ボリビア"]
};
function extend(target, labels) {
 if (!target) return;
 Object.keys(labels).forEach(function (key) {
   if (target[key]) { target[key][3] = labels[key][0]; target[key][4] = labels[key][1]; }
 });
}
extend(window.NGLG_CITIES, cities);
extend(window.NGLG_COUNTRIES, countries);
window.NGLG_applyLocale = function (lang, T) {
 var group = document.getElementById("langGroup");
 if (group) group.setAttribute("aria-label", T.langLabel || ({he:"שפה",ja:"言語"}[lang]) || "Language");
 var nav = document.getElementById("navLinks");
 if (nav) nav.setAttribute("aria-label", lang === "he" ? "פרקים" : lang === "ja" ? "章" : "Sections");
 var search = document.getElementById("regSearch");
 if (search) search.setAttribute("aria-label", T.regSearch);
 var chart = document.getElementById("regionChart");
 if (chart) chart.setAttribute("aria-label", T.chartTitle);
 document.querySelectorAll("input").forEach(function (input) {
   input.dir = input.id === "inRef" ? "ltr" : "auto";
 });
 if (lang !== "he") return;
 // Isolate contiguous Latin phrases so mixed Hebrew/English punctuation stays ordered.
 var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
   acceptNode: function (node) {
     return node.parentElement.closest("script,style,bdi,svg,input,textarea") || !/[A-Za-z0-9]/.test(node.data)
       ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
   }
 });
 var nodes = [], node;
 while ((node = walker.nextNode())) nodes.push(node);
 nodes.forEach(function (text) {
   var re = /[A-Za-z0-9][A-Za-z0-9.,:'’&@_+°/–—−()\-]*(?:[ \t]+[A-Za-z0-9][A-Za-z0-9.,:'’&@_+°/–—−()\-]*)*/g;
   var fragment = document.createDocumentFragment(), pos = 0, match;
   while ((match = re.exec(text.data))) {
     fragment.appendChild(document.createTextNode(text.data.slice(pos, match.index)));
     var bdi = document.createElement("bdi"); bdi.dir = "ltr"; bdi.textContent = match[0];
     fragment.appendChild(bdi); pos = re.lastIndex;
   }
   fragment.appendChild(document.createTextNode(text.data.slice(pos)));
   text.replaceWith(fragment);
 });
};
})();
