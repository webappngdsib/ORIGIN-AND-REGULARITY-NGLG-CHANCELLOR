/* Simple access gate for the Grand Secretariat's tools on the public page
   (photo editing and the petition letter). The code is checked against a
   SHA-256 hash; once entered it stays valid for this browser tab session. */
(function () {
  "use strict";
  var HASH = "c00cf031587d12c309358e85de8876b2738d3ef2cadd88db6b07318ea0ba8973";
  var KEY = "nglg.unlock";

  function get() { try { return sessionStorage.getItem(KEY) === "1"; } catch (e) { return false; } }
  function set(v) { try { if (v) sessionStorage.setItem(KEY, "1"); else sessionStorage.removeItem(KEY); } catch (e) {} }

  function sha256(text) {
    var data = new TextEncoder().encode(text);
    return crypto.subtle.digest("SHA-256", data).then(function (buf) {
      return Array.prototype.map.call(new Uint8Array(buf), function (b) { return ("0" + b.toString(16)).slice(-2); }).join("");
    });
  }

  window.NGLG_GATE = {
    isUnlocked: get,
    lock: function () { set(false); },
    /* Resolves true if the code is correct (and remembers it for the session). */
    tryCode: function (code) {
      return sha256(String(code || "").trim()).then(function (h) { var ok = h === HASH; if (ok) set(true); return ok; });
    },
    /* Prompts for the code if needed. Resolves true when access is granted. */
    ask: function (promptText, wrongText) {
      if (get()) return Promise.resolve(true);
      var code = window.prompt(promptText);
      if (code === null) return Promise.resolve(false);
      return this.tryCode(code).then(function (ok) { if (!ok) window.alert(wrongText); return ok; });
    }
  };
})();
