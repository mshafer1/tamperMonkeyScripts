// ==UserScript==
// @name         Facebook Political Blocker
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Disable posts on Facebook that contain any of the keywords in the list below. Posts can be re-enabled by clicking on them.
// @author       mshafer1 (github.com/mshafer1)
// @resource      facebook_blocker_includes/methods.js
// @match        https://www.facebook.com/*
// @require      https://code.jquery.com/jquery-3.4.1.min.js
// @licence      GPL-3.0-or-later; https://github.com/mshafer1/tamperMonkeyScripts/blob/master/LICENSE
// @copyright    2019+, mshafer1
// ==/UserScript==

(function() {
    'use strict';

    var keywords = ['politics', 'Trump', 'election', 'political', 'vote', 'voting'];

    $(window).scroll(function (){checkScreen(keywords)});
})();