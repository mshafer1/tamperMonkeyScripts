// ==UserScript==
// @name         Hide the suggestions
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hide the stupid suggestions cart overlay on F3
// @author       mshafer1
// @match        https://www.instacart.com/*
// @icon         https://www.google.com/s2/favicons?domain=instacart.com
// @require      https://cdn.jsdelivr.net/gh/mshafer1/tamperMonkeyScripts@0.1/shortcut_js/shortcut.js
// @grant        none
// ==/UserScript==

shortcut.add("F3",function() {
    let search = document.querySelector(".css-785hk5");
    // console.log("search came back as", search);
    if(search) search.remove();
});
