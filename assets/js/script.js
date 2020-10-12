(function ($) {

    "use strict";

    var width = $(window).width();

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var box = $('.top-banner').height();
        var header = $('header').height();

        if (scroll >= box - header) {
            $("header").addClass("background-header");
        } else {
            $("header").removeClass("background-header");
        }

        if(scroll >= box - header) {
            if(width < 991) {
                $('.menu-trigger').removeClass('active');
                $('.header-area .nav').slideUp(0);	
            }	
        }
    });

    if($('.menu-trigger').length){
		$(".menu-trigger").on('click', function() {	
			$(this).toggleClass('active');
            $('.header-area .nav').slideToggle(200);
		});
    }
    
    $('a[href*=\\#]:not([href=\\#])').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				if(width < 991) {
					$('.menu-trigger').removeClass('active');
					$('.header-area .nav').slideUp(200);	
				}				
				$('html,body').animate({
					scrollTop: (target.offset().top) - 80
				}, 700);
				return false;
			}
		}
	});
})(window.jQuery);