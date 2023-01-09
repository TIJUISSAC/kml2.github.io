$(document).ready(function () {

    $('.stellarnav').stellarNav({
        breakpoint: 991,
        position: 'right',
    });

    // slide
    var rev = $('.brands-slide');
    rev.on('init', function (event, slick, currentSlide) {
        var
            cur = $(slick.$slides[slick.currentSlide]),
            next = cur.next(),
            prev = cur.prev();
        prev.addClass('slick-sprev');
        next.addClass('slick-snext');
        cur.removeClass('slick-snext').removeClass('slick-sprev');
        slick.$prev = prev;
        slick.$next = next;
    }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        console.log('beforeChange');
        var
            cur = $(slick.$slides[nextSlide]);
        console.log(slick.$prev, slick.$next);
        slick.$prev.removeClass('slick-sprev');
        slick.$next.removeClass('slick-snext');
        next = cur.next(),
            prev = cur.prev();
        prev.prev();
        prev.next();
        prev.addClass('slick-sprev');
        next.addClass('slick-snext');
        slick.$prev = prev;
        slick.$next = next;
        cur.removeClass('slick-next').removeClass('slick-sprev');
    });

    rev.slick({
        speed: 1000,
        arrows: true,
        dots: false,
        focusOnSelect: true,
        prevArrow: '<span class="red-triangle-left"><img src="images/arrow-left.png"></span>',
        nextArrow: '<span class="red-triangle-right"><img src="images/arrow-right.png"></span>',
        infinite: true,
        centerMode: true,
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '0',
        swipe: true,
        customPaging: function (slider, i) {
            return '';
        },
        infinite: true,
        asNavFor: '.slider-for, .text-for',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    fade: false,
                    swipe: false,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.brands-slide, .text-for'
    });

    $('.text-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.brands-slide, .slide-for'
    });

    var colors = ["#5c9af7", "#f7cd5c", "#67b47b"];
    var currentIndex = 0;

    rev.on("beforeChange", function () {
        $(".brands-section").css("background-color", colors[currentIndex++ % colors.length]);
    });

});

// Equal height
$(function () {
    $('.ftEql').matchHeight();
    $('.brandEql').matchHeight();
    $('.vidEql').matchHeight();
    $('.sponsor-item').matchHeight();
    $('.abtEql').matchHeight();
    $('.bestEql').matchHeight();
    $('.addEql').matchHeight();
    $('.termEql').matchHeight();
});

// wow.js
wow = new WOW(
    {
        boxClass: 'wow',      // default
        animateClass: 'animated', // default
        offset: 0,          // default
        mobile: true,       // default
        live: true        // default
    }
)
wow.init();
