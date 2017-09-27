(function($) {
    'use strict';

    /*=======================================
         PRELOADER                     
    ======================================= */
    $(window).on('load', function() {
        $('#preloader').fadeOut('slow', function() {
            $(this).remove();
        });
        $(".slides__preload_wrapper").fadeOut(1500);
    });
    $(".shop_setting").on('click', function() {
        $(".shop_setting_inr").slideToggle();
    });
	

	
		    /* =======================================
         cart plus minus button
    ======================================*/
    $(".cart-plus-minus").append('<div class="dec qtybutton">-</i></div><div class="inc qtybutton">+</div>');

    $(".qtybutton").on("click", function() {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() == "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find("input").val(newVal);
    });
	
	
    /* =======================================
        For Menu
    =======================================*/
    $("#navigation").menumaker({
        title: "",
        format: "multitoggle"
    });
    /* =======================================
        For slider
    =======================================*/
    $(".slider_home").owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        autoplay: false,
        autoplayTimeout: 9000, // Default is 5000
        smartSpeed: 1000, // Default is 250
        loop: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        mouseDrag: false,
        touchDrag: false,
    });


    /* =======================================
         Counter Up
       =======================================*/
    $('.counter').counterUp({
        delay: 10,
        time: 500
    });



    /* =======================================
           Team Section 
       =======================================*/
    $("#team").owlCarousel({
        items: 4, //Set Team items
        loop: true,
        margin: 10,
        autoplay: false,
        autoplayTimeout: 3000, // Default is 5000
        smartSpeed: 1000, // Default is 250
        singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        pagination: true,
        nav: false,
        dots: false,
        responsive: {
            1200: {
                items: 4
            },
            992: {
                items: 3
            },
            768: {
                items: 3
            },
            480: {
                items: 2
            },
            320: {
                items: 1
            },
            280: {
                items: 1
            }
        }
    });

 

    /* =======================================
           Testimonial Section 
       =======================================*/
    $("#testimonial").owlCarousel({
        autoPlay: 5000, //Set AutoPlay to 5 seconds
        autoplay: true,
        smartSpeed: 2000, // Default is 250
        items: 1, //Set Testimonial items
        loop: true,
        margin: 10,
        singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        pagination: false,
        nav: false,
        dots: false,
        responsive: {
            1200: {
                items: 1
            },
            992: {
                items: 1
            },
            768: {
                items: 1
            },
            480: {
                items: 1
            },
            320: {
                items: 1
            },
            280: {
                items: 1
            }
        }
    });
    /*=======================================
		Client Section  
	=======================================*/
    $("#client").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 6 seconds
        autoplay: true,
        smartSpeed: 1000, // Default is 250
        items: 6,
        loop: true,
        touchDrag: true,
        mouseDrag: true,
        pagination: true,
        dots: false,
        nav: false,
        responsive: {
            1200: {
                items: 6
            },
            992: {
                items: 5
            },
            768: {
                items: 5
            },
            480: {
                items: 4
            },
            320: {
                items: 3
            },
            280: {
                items: 2
            }
        }
    });

    /*=======================================
             Header Section
        ========================================== */
    $(document).ready(function() {
        $(".slider_home").on("translate.owl.carousel", function() {
            $(".single_slider h2, .single_slider h4, .single_slider p").removeClass("animated fadeInUp").css("opacity", "0");
            $(".single_slider .slider_btn").removeClass("animated fadeInDown").css("opacity", "0");
        });

        $(".slider_home").on("translated.owl.carousel", function() {
            $(".single_slider h2, .single_slider h4, .single_slider p").addClass("animated fadeInUp").css("opacity", "1");
            $(".single_slider .slider_btn").addClass("animated fadeInDown").css("opacity", "1");
        });

    });


    /* =======================================
    		WOW ANIMATION
    ======================================= */
    var wow = new WOW({
        mobile: false
    });
    wow.init();


    /*=======================================
        Scroll Top
    =======================================*/
    $(".scrollup").on('click', function() {
        $('html,body').animate({
            'scrollTop': '0'
        }, 4000);
        return false;
    });


    /* =======================================
    Gallery Section : mixItUp jQuery 
=======================================*/
    $('.project-list').mixItUp({
        animation: {
            effects: 'fade stagger(50ms)',
            reverseOut: true,
            staggerSequence: function(i) {
                return (2 * i) - (5 * ((i / 3) - ((1 / 3) * (i % 3))));
            }
        }
    });
	    /*=======================================
        Single Product
    =======================================*/
    $('.single-thumbnail-big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.single-thumbnail-small'
    });
    $('.single-thumbnail-small').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.single-thumbnail-big',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        arrows: true,
        prevArrow: '<button type="button" class="custom-prev"><i class="fa fa-long-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="custom-next"><i class="fa fa-long-arrow-right"></i></button>'
    });

})(jQuery);