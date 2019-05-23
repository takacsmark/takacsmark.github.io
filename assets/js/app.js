$(function() {

    //Display multiple images as gallery in posts
    $("article img ~ img").each(function(){
        var nodes = $(this).parent().children();
        nodes.addClass("w-50 p-1 float-left");
    });

    //Sticky sidebar
    $("#sidebar-book-promo").stick_in_parent({
        parent: ".sticky-container",
	offset_top: 75 
    });
    
});
