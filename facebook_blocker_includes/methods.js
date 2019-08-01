function check(word, html) {
    own_word = '\\s+' + word + '\\s+';
    if(check_regex(own_word, html)) {
        return true;
    }

    hash_tag = '\\#\\S*' + word;
    if(check_regex(hash_tag, html)) {
        return true;
    }

    url = 'https?\\:\\/\\/\\S*' + word + '\\S*'
    if(check_regex(url, html)) {
        return false;
    }

    return html.toLowerCase().search(word.toLowerCase()) != -1;
}

function check_regex(re, html, flags='ig') {
    var r = new RegExp(re, flags);
    return html.match(r) != null;
}

function fadeIn() {
    $(this).attr('disabled', false);
    $(this).fadeTo('slow', 1);
    $(this).off();
}

function checkScreen(keywords) {
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

try {
    var exports = module.exports = {};
    exports.check = check;
} catch (error) {
    // pass
}