// ==UserScript==
// @name         GDrive: Copy embed URL
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Copy embed link for Google drive files
// @author       mshafer1
// @match        https://drive.google.com/file/d/*
// @icon         https://www.google.com/s2/favicons?domain=google.com
// @grant        GM_registerMenuCommand
// @grant        GM_setClipboard
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    function copy_url() {
        var href = window.location.href
        var result = href.match(/file\/d\/(.+)\/view/);
        var url = 'https://drive.google.com/uc?id=' + result[1]
        console.log(href, ' -> ', result[1], ' -> ', url)
        GM_setClipboard(url, "text");
        console.log("copied to clipboard")
    }

    GM_registerMenuCommand("Copy embed url", copy_url);
})();
