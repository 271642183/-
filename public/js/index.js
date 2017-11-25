$(document).ready(function(){
	var banSwiper = new Swiper('.ban-swiper-container',{
		autoplay: 3000,
		pagination : '.ban-pagination',

	});
	var culturalSwiper = new Swiper('.cultural-swiper-container',{
		autoplay: 3000,
    	nextButton: '.cultural-swiper-next',
   		prevButton:'.cultural-swiper-prev',

	});
	$('.nav-btn').mousemove(function(){
		$('.nav').addClass('active');
	});
	$('.nav .mask').mousemove(function(){
		$('.nav').removeClass('active');
	});
});