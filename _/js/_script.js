$(function(){

    $('#full').fullpage({
		menu: '.mainNav ul',
		navigation: true,
		showActiveTooltips: true,
		anchors: ['home', 'nosotros', 'servicios', 'guia-de-programas', 'clientes', 'contacto'],
		paddingTop : '100px'
	});
	
	
	$('.homeslider').slideme({
		arrows: true,
		loop : true,
		labels : {
			next: '>',
			prev: '<',
		},
		autoslide : true,
		transition : 'zoom',
		interval : 1800,
		autoslideHoverStop : false
	});
	
	
	$('.scrollable').perfectScrollbar();
	
	$('.sidebarguia .sideContent>ul>li>a.opener').click(function(e){
		e.preventDefault();
		if( $(this).parent().is('.active') ){
				$(this).parent().toggleClass('active');
		} else {
				$('.sidebarguia .active').removeClass('active');
				$(this).parent().addClass('active');
		}
	});
	
	$('.sidebarguia .sideContent>ul>li>a.closer').click(function(e){
		$('.sidebarguia .active').removeClass('active');
		$(this).parent().addClass('active');
	});

});