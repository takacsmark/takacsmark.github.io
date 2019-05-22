$(function() {

    //Display multiple images as gallery in posts
    $("article img ~ img").each(function(){

        var nodes = $(this).parent().children();

        nodes.addClass("w-50 p-1 float-left");
    });

    //Hide and show share buttons
    let sheight = $(".social-float .social-share").height();
    
    $(window).scroll( () => {
        if($(document).height()-$(".social-float .social-share").offset().top-sheight < $(document).height()-$("div.comments").offset().top) {
            $(".social-float").css("visibility", "hidden");
        } else {
            $(".social-float").css("visibility", "visible");
        }
    });
});
