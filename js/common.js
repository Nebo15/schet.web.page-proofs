$(document).ready(function() {

$('.menu__item>a').click(function(){
	href = $(this).attr('href');
	//alert(href);
	block = $(href+'');
	blockTop = $(href+'').offset();
	blockTopX = blockTop.top - 70;
	//alert(blockTopX);
	$.scrollTo(blockTopX, 500);
	return false;
});
// 	stop = $(document).scrollTop();
//   //stopnav = $('')
// 	nav1 = $('#js-benefits').offset().top - 127;
// 	nav2 = $('#js-security').offset().top - 127;
// 	nav3 = $('#js-news').offset().top - 127;
// 	nav4 = $('#js-pricing').offset().top - 127;
	

// 	if(stop>=nav1 - 10 && stop<nav2){
// 		$('#js-nav a').removeClass('active');
// 		$('.js-benefits').addClass('active');
// 	}
// 	if(stop>=nav2 - 10 && stop<nav3){
// 		$('#js-nav a').removeClass('active');
// 		$('.js-security').addClass('active');
// 	}
// 	if(stop>=nav3 - 10 && stop<nav4){
// 		$('#js-nav a').removeClass('active');
// 		$('.js-news').addClass('active');
// 	}
// 	if(stop>=nav4 - 10){
// 		$('#js-nav a').removeClass('active');
// 		$('.js-pricing').addClass('active');
// 	}
// //bottom scroll
// if($(window).scrollTop() + $(window).height() == $(document).height()) {
// 	$('#js-nav a').removeClass('active');
// 	$('.js-pricing').addClass('active');
//    }
	navmenu = $('.l-menu').offset().top;
	nav1 = $('#tasks').offset().top - 70;
	nav2 = $('#banks').offset().top - 70;
	nav3 = $('#providers').offset().top - 70;
	nav4 = $('#integrators').offset().top - 70;
	nav5 = $('#processing').offset().top - 70;
	$(window).scroll(function(event) {
		stop = $(document).scrollTop();

		if(stop<nav1){
			$('.menu__item').removeClass('is-active');
			$('.menu__tasks').addClass('is-active');
		}
		if(stop>=nav1-10 && stop<nav2){
			$('.menu__item').removeClass('is-active');
			$('.menu__tasks').addClass('is-active');
		}
		if(stop>=nav2-10 && stop<nav3){
			$('.menu__item').removeClass('is-active');
			$('.menu__banks').addClass('is-active');
		}
		if(stop>=nav3-10 && stop<nav4){
			$('.menu__item').removeClass('is-active');
			$('.menu__providers').addClass('is-active');
		}
		if(stop>=nav4-10 && stop<nav5){
			$('.menu__item').removeClass('is-active');
			$('.menu__integrators').addClass('is-active');
		}
		if(stop>nav5){
			$('.menu__item').removeClass('is-active');
			$('.menu__processing').addClass('is-active');
		}
		//fixing menu
		if(stop>navmenu){
		  $('body').addClass('is-fixednav');
		}
		else{
		  $('body').removeClass('is-fixednav');
		}
	})
});

