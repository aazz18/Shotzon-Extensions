// ==UserScript==
// @name        Shotzon Anti-Anti AdBlock Bypass
// @namespace   Violentmonkey Scripts
// @match       *://*cloutgist.com/*
// @match       *://*codesnse.com/*
// @grant       none
// @icon        https://www.google.com/s2/favicons?sz=64&domain=shotzon.com
// @version     1.0
// @author      SleepingPig35
// @updateURL    https://github.com/SleepingPig35/Shotzon-Extensions/raw/main/antiadblock.js
// @downloadURL  https://github.com/SleepingPig35/Shotzon-Extensions/raw/main/antiadblock.js
// @description Bypasses anti-adblock on Shotzon
// ==/UserScript==

(function() {
    'use strict';

    function removeAntiAdBlock() {
        var adbDetected = document.getElementById("s65c");
        if (adbDetected) {
            console.log("[Anti-Anti Adlock] Detected Anti-AdBlock element! Removing...");
            adbDetected.parentNode.removeChild(adbDetected);
            console.log("[Anti-Anti Adlock] Removed Anti-AdBlock element! ✅");
            return true;
        }
        return false;
    }

    function bypassAntiAdBlock() {
        // Show reCAPTCHA
        document.querySelectorAll(".g-recaptcha").forEach(element => {
            element.style.display = "block";
        });

        // Show Captcha Check
        document.querySelectorAll(".btn-captcha, .captcha-check").forEach(element => {
            element.style.display = "block";
        });

        if (!removeAntiAdBlock()) {
            // If not found, observe the DOM for changes
            var observer = new MutationObserver(function(mutations) {
                mutations.forEach(function() {
                    if (removeAntiAdBlock()) {
                        // Element found and removed, stop observing
                        observer.disconnect();
                    }
                });
            });

            // Start observing the document body for added nodes
            observer.observe(document.body, { childList: true, subtree: true });
        }
    }

    // Wait for the page to load
    window.addEventListener('load', bypassAntiAdBlock, false);
})();
