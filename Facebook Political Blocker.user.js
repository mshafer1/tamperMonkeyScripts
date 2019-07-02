// ==UserScript==
// @name         Facebook Political Blocker
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Disable posts on Facebook that contain any of the keywords in the list below. Posts can be re-enabled by clicking on them.
// @author       You
// @match        https://www.facebook.com/*
// @require      https://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

(function() {
    'use strict';

    var keywords = ['politics', 'Trump', 'election', 'political', 'vote', 'voting'];

    function check(word, html) {
        return html.search(word) != -1;
    }

    function fadeIn() {
        $(this).attr('disabled', false);
        $(this).fadeTo('slow', 1);
        $(this).off();
    }

    function checkScreen() {
        $('.userContentWrapper').each(function () {
            // console.log($(this));
            var html = $(this).first().html();
            if(keywords.some(function (e) {return check(e, html);})) {
                // console.log("Match");
                $(this).attr('disabled', true);
                $(this).fadeTo('fast', .1);
                $(this).click(fadeIn);
            }
        });
    }

    $(window).scroll(checkScreen);
})();