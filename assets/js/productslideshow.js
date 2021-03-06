/*** 
    Simple jQuery Slideshow Script
    Released by Jon Raasch (jonraasch.com) under FreeBSD license: free to use or modify, not responsible for anything, etc.  Please link out to me if you like it :)
***/
var refreshIntervalId;

$(document).ready(function(){

	$('a.image-thumb img').mouseover(function() {
		var index = $(this).parent().index();
		loadImage( index );
	});

	$('a.image-thumb img').click(function() {
		$(this).css('opacity', '1');
	});
	
	$('a.image-thumb img').mouseenter(function() {
		$(this).css('opacity', '1');
	});
	
	$('a.image-thumb img').mouseup(function() {
		$(this).css('opacity', '0.5');
	});

	$('a.image-thumb img').mouseleave(function() {
		$(this).css('opacity', '0.5');
	});

});

function slideSwitch() {
    var $active = $('#slideshow IMG.active');

    if ( $active.length == 0 ) $active = $('#slideshow IMG:last');

    // use this to pull the images in the order they appear in the markup
    var $next =  $active.next().length ? $active.next()
        : $('#slideshow IMG:first');

    // uncomment the 3 lines below to pull the images in random order
    
    // var $sibs  = $active.siblings();
    // var rndNum = Math.floor(Math.random() * $sibs.length );
    // var $next  = $( $sibs[ rndNum ] );


    $active.addClass('last-active');

    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
}

function loadImage( $link ) {
	var $images = $('#slideshow IMG');
	var $load = $( $images[$link-2] );
	
	var $active = $('#slideshow IMG.active');
	
	
	if ( $active.attr('src') != $load.attr('src') ) {
	
	$active.addClass('last-active');
	
	$load.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 500, function() {
            $active.removeClass('active last-active');
        });
		
	}
			
	clearInterval(refreshIntervalId);
}

$(function() {
    refreshIntervalId = setInterval( "slideSwitch()", 4000 );
});
swfobject.registerObject("FlashID");