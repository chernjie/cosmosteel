function loadMap( $link ) {

	var $links = $('.contact_tab a');
	var $link1 = $( $links[0] );
	var $link2 = $( $links[1] );
	var $link3 = $( $links[2] );
	
	if ( ($link-1) == 0 ) {		
	$link1.addClass('contact_tab_active');	
	} else {
	$link1.removeClass('contact_tab_active');
	}
	if ( ($link-1) == 1 ) {		
	$link2.addClass('contact_tab_active');	
	} else {
	$link2.removeClass('contact_tab_active');
	}
	if ( ($link-1) == 2 ) {		
	$link3.addClass('contact_tab_active');	
	} else {
	$link3.removeClass('contact_tab_active');
	}
	
	var $map = $('.map_container .map_wrap');
	var $map1 = $( $map[0] );
	var $map2 = $( $map[1] );
	var $map3 = $( $map[2] );
	
	if ( ($link-1) == 0 ) {		
	$map1.show();	
	} else {
	$map1.hide();
	}
	if ( ($link-1) == 1 ) {		
	$map2.show();	
	} else {
	$map2.hide();
	}
	if ( ($link-1) == 2 ) {		
	$map3.show();	
	} else {
	$map3.hide();
	}
}

