// ==UserScript==
// @name         Make video large
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Remove l6 blocks so video can be large
// @author       mshafer1
// @match        https://course18.fast.ai/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=fast.ai
// @require      https://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

(function() {
    'use strict';

    function init() {
        $(".large-6").removeClass("large-6").addClass("large-12");
        $("iframe").attr("width", "100%").attr("height", "560");
    }

    $(window).ready(init);
    // Your code here...
})();