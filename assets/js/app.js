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

    //Inline sponsored links
    if($("article").length){
    
	for(let i=0; i< promos.length; i++) {
	
	    let promoHTML = '<section class="row inline-sponsored mb-4 mt-2">';
            promoHTML += '<div class="col-12 col-sm-6">';
            promoHTML += '<div class="card bg-light border-light">';
            promoHTML +=   '<div class="card-body p-3">';
            promoHTML +=     '<div class="card-text">';	
            promoHTML +=       '<div class="media">';
            promoHTML +=         '<img src="' + promos[i].image + '" class="" alt="' + promos[i].title + '">';
            promoHTML +=         '<div class="media-body pl-3">';
            promoHTML +=           '<h6 class="">' + promos[i].title + '</h6>';
            promoHTML +=           '<small class="text-muted">' + promos[i].sub + '</small>';
            promoHTML +=           '<a href="' + promos[i].url + '" target="_blank" class="stretched-link"></a>';
            promoHTML +=	     '</div>';
            promoHTML +=	   '</div>';
            promoHTML +=     '</div>';
            promoHTML +=   '</div>';
            promoHTML += '</div>';
            promoHTML += '</div>';
	    promoHTML += '</section';

	    $("article p:nth-of-type(" + String(Math.floor($("article p").length / 4 * (i + 1))) + ")").after(promoHTML);
	}

    }
});
