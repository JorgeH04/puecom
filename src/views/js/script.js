$(document).ready(function(){
	//header
	var fixHeight = function(){
		$('.navbar-nav').css('max-height',document.documentElement.clientHeight - 150);
	}
	fixHeight();
	$(window).resize(function(){
		fixHeight();
	});

	$('.navar .navbar-toggler').click(function(){
		fixHeight();
	});

	$('.navbar-toggler, .overlay').click(function(){
		$('.menu, .overlay').toggleClass('open');
	});
});