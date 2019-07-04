// ==UserScript==
// @name         Facebook Political Blocker
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Disable posts on Facebook that contain any of the keywords in the list below. Posts can be re-enabled by clicking on them.
// @author       mshafer1 (github.com/mshafer1)
// @match        https://www.facebook.com/*
// @require      https://code.jquery.com/jquery-3.4.1.min.js
// @licence      GPL-3.0-or-later; https://github.com/mshafer1/tamperMonkeyScripts/blob/master/LICENSE
// @copyright    2019+, mshafer1
// ==/UserScript==

(function() {
    'use strict';

    var keywords = ['politics', 'Trump', 'election', 'political', 'vote', 'voting'];

    function check(word, html) {
        return html.toLowerCase().search(word.toLowerCase()) != -1;
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