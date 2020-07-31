// ==UserScript==
// @name         musictheory.net do not track
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       mshafer1
// @match        https://www.musictheory.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function clear_data() {
        localStorage.clear();
        console.log("Cookies: ", document.cookie);
        document.cookie = 'B=; path=/; expires='+ new Date(0);
        console.log("Cookies: ", document.cookie);
    }
    clear_data();

    window.setTimeout(300, clear_data);

})();
