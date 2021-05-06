// ==UserScript==
// @name         thesaurus.com hotkeys
// @namespace    mshafer1
// @version      1.0
// @description  Adds hotkeys for easier navigation on thesaurus.com
// @author       mshafer
// @match        https://www.thesaurus.com/*
// @grant        none
// @require      https://cdn.jsdelivr.net/gh/mshafer1/tamperMonkeyScripts@0.1/shortcut_js/shortcut.js
// ==/UserScript==

shortcut.add("F3",function() {
	let search = document.querySelector(".search-input");
    if(search) search.focus();
});
