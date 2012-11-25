$(document).ready(function(){
	var loadMaps = $('.loadMap');
	for (var i=0; i<loadMaps.length; i++)
	{
		$(loadMaps[i]).click(function (e){
			e.preventDefault();

			$('.loadMap').removeClass('contact_tab_active');
			$(this).addClass('contact_tab_active');

			$('.map_container .map_wrap').hide();
			var classes = $(this).attr('class').split(' ');
			for (var j in classes)
			{
				$('.' + classes[j] + 'Map').show();
			}
		});
	}
});