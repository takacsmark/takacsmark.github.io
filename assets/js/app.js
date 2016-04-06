$(document).foundation();

$(function() {
    $("article img ~ img").each(function(){

        var nodes = $(this).parent().children();

        nodes.wrapAll('<div class="row gallery"></div>');
        nodes.addClass("small-6 columns");
    });

    $("article .video-thumb").addClass("flex-video");

});
