$(document).ready(function(){
	var banSwiper = new Swiper('.ban-swiper-container',{
		pagination : '.ban-pagination',

	});
	$('.nav-btn').mousemove(function(){
		$('.nav').addClass('active');
	});
	$('.nav .mask').mousemove(function(){
		$('.nav').removeClass('active');
	});
});