// ==UserScript==
// @name         Facebook Political Blocker
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  Disable posts on Facebook that contain any of the keywords in the list below. Posts can be re-enabled by clicking on them.
// @author       mshafer1 (github.com/mshafer1)
// @match        https://www.facebook.com/*
// @require      https://code.jquery.com/jquery-3.4.1.min.js
// @require      facebook_blocker_includes/methods.js
// @licence      GPL-3.0-or-later; https://github.com/mshafer1/tamperMonkeyScripts/blob/master/LICENSE
// @copyright    2019+, mshafer1
// ==/UserScript==

/*
Facebook has a script-src policy that prevents loading scripts dynamically from third parties.
To take advantage of the updates to the helper methods, 
go to TM->Settings
Set "Config Mode" to "Advanced"
Scroll down to the Externals section and set to "Always"

This will update the script after running initially on the page (if there is an update), 
  the next time you visit, you will run with latest updates.
*/

(function() {
    'use strict';

    var keywords = ['politics', 'Trump', 'election', 'political', 'vote', 'voting'];

    $(window).scroll(function (){checkScreen(keywords)});

    checkScreen(keywords);
})();
