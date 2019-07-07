function check(word, html) {
    return html.toLowerCase().search(word.toLowerCase()) != -1;
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