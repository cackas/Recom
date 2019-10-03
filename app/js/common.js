$(function() {
    //Scroll
	var windowHeight = $(window).height();
 
	/*$(document).on('scroll', function() {
		$('.scroll').each(function() {
			var self = $(this),
			height = self.offset().top + self.height();
			if ($(document).scrollTop() + windowHeight >= height) {
				self.addClass('fromBottom')
			}
        });
    });
	$(document).on('scroll', function() {
		$('.scrollRight').each(function() {
			var self = $(this),
			height = self.offset().top + self.height();
			if ($(document).scrollTop() + windowHeight >= height) {
				self.addClass('fromRight')
			}
        });
    });*/
    $(document).on('scroll', function() {
		$('.candles').each(function() {
			var self = $(this),
			height = self.offset().top + self.height();
			if ($(document).scrollTop() + windowHeight >= height) {
				self.addClass('bars')
			}
        });
	});
    //End Scroll
	$('.popup-youtube').hover(function(){
		$('#bt_play_video').addClass('tuktuk');
	}, function(){
		$('#bt_play_video').removeClass('tuktuk');
	})

    //Slick Slider
    $('.reviews').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows:false,
        infinite: false
    });
    $('.left-arrow').on('click', function() {
        $('.reviews').slick('slickPrev');
    });

    $('.right-arrow').on('click', function() {
        $('.reviews').slick('slickNext');
    });
    //End Slick Slider

    //Popup
    $('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
	//End Popup

	/*var options = {
		offset: 1000,
		classes: {
			clone:   'banner--clone',
			stick:   'banner--stick',
			unstick: 'banner--unstick'
		}
	};

	var header = new Headhesive('.nav-wrap', options);*/
	
	//Wow
	new WOW().init();
	//End wow
	$('.adaptive-btn').click(function(){
		$('.menu--mobile').fadeIn();
	})
	$('.adaptive-btn--dismiss').click(function(){
		$('.menu--mobile').fadeOut();
	})
	//Tabs price
	TabsPrice();
	function TabsPrice(){
		$('.tarifs-wrap input').click(function(){	
			if($(this).attr('id')=='basic') {
				console.log('basic');
				$('.price-tab').fadeOut();
				$('#price-tab-basic').fadeIn();
			}
			if($(this).attr('id')=='shopify-tarif') {
				console.log('shopify-tarif');
				$('.price-tab').fadeOut();
				$('#price-tab-shopify').fadeIn();
			}
			if($(this).attr('id')=='advanced') {
				console.log('advanced');
				$('.price-tab').fadeOut();
				$('#price-tab-advanced').fadeIn();
			}
			if($(this).attr('id')=='plus') {
				console.log('plus');
				$('.price-tab').fadeOut();
				$('#price-tab-plus').fadeIn();
			}
		});

		$('.cms-wrap input').click(function(){	
			if($(this).attr('id')=='shopify') {
				$('#cms-tab-2').fadeOut();
				$('#cms-tab-1').fadeIn();
			}
			if($(this).attr('id')=='bigcommerce') {
				$('#cms-tab-1').fadeOut();
				$('#cms-tab-2').fadeIn();
			}
		});

		$('.time-tab-wrap input').click(function(){
			var timeTabWrap = $(this).closest('.price-tab-wrap');
			if($(this).attr('value')=='month') {
				timeTabWrap.find('.month').addClass('active');
				timeTabWrap.find('.year').removeClass('active');
			}
			if($(this).attr('value')=='year') {
				timeTabWrap.find('.month').removeClass('active');
				timeTabWrap.find('.year').addClass('active');
			}
		});
	}
//Lists
Lists();
function Lists() {	
	var list2= $('#list2'),
		list1= $('#листик_1'),
		list3 = $('#Group_25'),
		list4 = $('#list4');

	list1f();
	list2f();
	list3f();
	list4f();

	function list2f () {
		setInterval(function(){
			if(!list2.hasClass('active')) {
				list2.addClass('active');
			} else {
				list2.removeClass('active');
			};
		}, 4000);
	};

	function list1f () {
		setTimeout( function(){
			setInterval(function(){
				if(!list1.hasClass('active')) {
					list1.addClass('active');
				} else {
					list1.removeClass('active');
				};
			}, 4000);
		}, 2000);
	};

	function list3f () {
		setTimeout( function(){
			setInterval(function(){
				if(!list3.hasClass('active')) {
					list3.addClass('active');
				} else {
					list3.removeClass('active');
				};
			}, 4000);
		}, 1000);
	};

	function list4f () {
		setTimeout( function(){
			setInterval(function(){
				if(!list4.hasClass('active')) {
					list4.addClass('active');
				} else {
					list4.removeClass('active');
				};
			}, 4000);
		}, 3500);
	};
}
//Ends lists
});
