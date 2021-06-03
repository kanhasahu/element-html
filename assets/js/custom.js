AOS.init({
//	duration: 800,
//	easing: 'slide',
//	once: true
    easing: 'ease-in-out-sine'
});

$(function () {
    'use strict';
    $(".loader").delay(200).fadeOut("slow");
    $("#overlayer").delay(200).fadeOut("slow");

    var siteMenuClone = function () {
        $('.js-clone-nav').each(function () {
            var $this = $(this);
            $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
        });
        setTimeout(function () {
            var counter = 0;
            $('.site-mobile-menu .has-children').each(function () {
                var $this = $(this);
                $this.prepend('<span class="arrow-collapse collapsed">');
                $this.find('.arrow-collapse').attr({
                    'data-toggle': 'collapse',
                    'data-target': '#collapseItem' + counter,
                });
                $this.find('> ul').attr({
                    'class': 'collapse',
                    'id': 'collapseItem' + counter,
                });
                counter++;
            });
        }, 1000);

        $('body').on('click', '.arrow-collapse', function (e) {
            var $this = $(this);
            if ($this.closest('li').find('.collapse').hasClass('show')) {
                $this.removeClass('active');
            } else {
                $this.addClass('active');
            }
            e.preventDefault();
        });

        $(window).resize(function () {
            var $this = $(this),
                    w = $this.width();

            if (w > 768) {
                if ($('body').hasClass('offcanvas-menu')) {
                    $('body').removeClass('offcanvas-menu');
                }
            }
        });

        $('body').on('click', '.js-menu-toggle', function (e) {
            var $this = $(this);
            e.preventDefault();

            if ($('body').hasClass('offcanvas-menu')) {
                $('body').removeClass('offcanvas-menu');
                $('body').find('.js-menu-toggle').removeClass('active');
            } else {
                $('body').addClass('offcanvas-menu');
                $('body').find('.js-menu-toggle').addClass('active');
            }
        });

        // click outisde offcanvas
        $(document).mouseup(function (e) {
            var container = $(".site-mobile-menu");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('offcanvas-menu')) {
                    $('body').removeClass('offcanvas-menu');
                    $('body').find('.js-menu-toggle').removeClass('active');
                }
            }
        });
    };
    siteMenuClone();


    $("#owl-demo").owlCarousel({

        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        navigationText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        // "singleItem:true" is a shortcut for:
        // items : 1, 
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });

//	var owlPlugin = function() {
//		if ( $('.owl-single').length > 0 ) {
//			var owl = $('.owl-single').owlCarousel({
//		    loop: false,
//		    autoHeight: true,
//		    margin: 0,
//		    autoplay: false,
//		    smartSpeed: 1000,
//		    items: 1
//			});
//
//			var owl2 = $('.owl-single').owlCarousel({
//		    loop: false,
//		    autoHeight: true,
//		    margin: 0,
//		    autoplay: false,
//		    smartSpeed: 1000,
//		    items: 1
//			});
//
//			owl.on('initialized.owl.carousel', function() {
//				owl.trigger('refresh.owl.carousel')
//			})
//
//			owl2.on('initialized.owl.carousel', function() {
//				owl2.trigger('refresh.owl.carousel')
//			})
//
//			$('.authors a').each(function(i) {
//				$(this).attr("data-index", i);
//			});
//			$('.tab-nav li').each(function(i) {
//				$(this).find('a').attr("data-index", i);
//			});
//		}
//
//		$('body').on('click', '.authors a', function(e) {
//			e.preventDefault();
//
//			$('body').find('.authors a').removeClass('active');
//			var index = $(this).data('index');
//
//			console.log(index);
//
//			owl.trigger('to.owl.carousel', [$(this).data('index'), 1000]);
//			$(this).addClass('active');
//
//		});
//
//		$('.tab-nav li a').on('click', function(e) {
//			e.preventDefault();
//
//			owl2.trigger('to.owl.carousel', [$(this).data('index'), 1000]);
//
//			$('.tab-nav li').removeClass('active');
//			$(this).closest('li').addClass('active');
//		})
//
//
//	}
//	owlPlugin();

    var counter = function () {
        $('.count-numbers').waypoint(function (direction) {
            if (direction === 'down' && !$(this.element).hasClass('ut-animated')) {
                var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
                $('.counter > span').each(function () {
                    var $this = $(this),
                            num = $this.data('number');
                    $this.animateNumber({
                        number: num,
                        numberStep: comma_separator_number_step
                    }, 7000);
                });
            }
        }, {offset: '95%'});
    }
    counter();

    $('.selectpicker').selectpicker();

});

function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, autoDisplay: false}, 'google_translate_element');
}

function translateLanguage(lang) {
    googleTranslateElementInit();
    var $frame = $('.goog-te-menu-frame:first');
    if (!$frame.size()) {
        alert("Error: Could not find Google translate frame.");
        return false;
    }
    $frame.contents().find('.goog-te-menu2-item span.text:contains(' + lang + ')').get(0).click();
    return false;
}