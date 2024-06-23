// ==UserScript==
// @name         Shotzon Auto Download
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Auto presses the download button when the download link is detected.
// @author       SleepingPig35
// @match        *://go.cloutgist.com/*
// @match       *://go.codesnse.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=shotzon.com
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  function waitForElement(selector, callback, checkFrequencyInMs, timeoutInMs) {
    const startTimeInMs = Date.now();
    (function loopSearch() {
      if (document.querySelector(selector) != null) {
        callback();
      } else {
        setTimeout(function () {
          if (timeoutInMs && Date.now() - startTimeInMs > timeoutInMs) {
            return;
          }
          loopSearch();
        }, checkFrequencyInMs);
      }
    })();
  }

  function getUrlParameter(url, parameter) {
    const urlParams = new URLSearchParams(new URL(url).search);
    return urlParams.get(parameter);
  }

  waitForElement(
    "a.btn.btn-success.btn-lg.get-link",
    function () {
      console.log("Element found!");
      const element = document.querySelector(
        "a.btn.btn-success.btn-lg.get-link",
      );
      if (element) {
        window.location.href = element.href;
      }
    },
    100,
    10000,
  );
})();
