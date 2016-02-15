/*
 * tmdc javascript bundle 
 *
 * @author Savalera Ltd. 2015, all rights reserved
 */
$(function(){


    var $grid = $('.grid').masonry({
        itemSelector: '.grid-item'
    });

    $grid.imagesLoaded().progress( function() {
        $grid.masonry('layout');
    });

    
});
