$(function() {
    //Display multiple images as gallery in posts
    $("article img ~ img").each(function(){
        var nodes = $(this).parent().children();
        nodes.addClass("w-50 p-1 float-left");
    });
});
