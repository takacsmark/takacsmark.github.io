$(document).foundation();

$(function() {

    //Display multiple images as gallery in posts
    $("article img ~ img").each(function(){

        var nodes = $(this).parent().children();

        nodes.wrapAll('<div class="row gallery"></div>');
        nodes.addClass("small-6 columns");
    });

    //Make embedded videos fill the widht of the post
    $("article .video-thumb").addClass("flex-video");

    //Main page slideshow
    const slides = ['docker-book', 'dockerfile-tutorial'];
    let activeSlide = 0;

    function flipSlide() {

        let newSlide = activeSlide + 1;
        if(newSlide > slides.length -1 ) {
            newSlide = 0;
        }

        let activeElement = $("#" + slides[activeSlide]);
        let newElement = $("#" + slides[newSlide]);

        activeElement.addClass('slideout');

        activeElement.one("transitionend", function(event) {
            activeElement.addClass('offscreen');
            activeElement.removeClass('slideout');

            newElement.removeClass('offscreen');
            newElement.addClass('slidein');

            newElement.one("transitionend", function(event) {
                newElement.removeClass('slidein');

                activeSlide = newSlide;
                setTimeout(flipSlide, 6000);
            });
        });
    }

    setTimeout(flipSlide, 6000);
    
});