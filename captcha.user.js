// ==UserScript==
// @name         Shotzon First Page Captcha Bypass
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  First Page Captcha Bypass
// @author       SleepingPig35
// @match        *://cloutgist.com/*
// @match        *://codesnse.com/*
// @grant        none
// @updateURL    https://github.com/SleepingPig35/Shotzon-Extensions/raw/main/captcha.js
// @downloadURL  https://github.com/SleepingPig35/Shotzon-Extensions/raw/main/captcha.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=shotzon.com
// ==/UserScript==

(function () {
  "use strict";

  // Function to bypass Shotzon
  function bypassShotzon() {
    console.log("[Captcha Bypass] Detected Shotozon Captcha! Bypassing...");
    // Modify the URL to redirect through "go" and append encoded value of hidden input
    const clickarlinkValue = encodeURIComponent(
      document.querySelector('input[type="hidden"][name="clickarlink"]').value,
    );
    window.location.href =
      window.location.href.replace("https://", "https://go.") +
      clickarlinkValue;
    console.log("[Captcha Bypass] Bypassed Shotozon Captcha! ✅");
  }

  // Execute the bypass function
  bypassShotzon();
})();
