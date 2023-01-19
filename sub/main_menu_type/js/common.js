$(document).ready(function() {
    $('.slider').bxSlider();
});

$(function() {
    $('.rec-item button').on("click", function() {
        $(this).parent()
        .next()
        .css("display","block");
    });
    $('.flip-info button').on("click", function() {
        $(this).
        parent()
        .css("display","none");
    });

    $('.heart').on("click", function() {
        $(this).next()
        .css("display","block");
    });
    $('.heart_full').on("click", function() {
        $(this)
        .css("display","none");
    });

    $('.owl-carousel').owlCarousel({
        loop:false,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    $(document).ready(function() {
        var $slider = $('.multiple-items');
        var $progressBar = $('.swiper_scrollbar');
        var $progressBarLabel = $('.slider_label');
        
        $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
            var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
            
            $progressBar
            .css('background-size', calc + '% 100%')
            .attr('aria-valuenow', calc );
            
            $progressBarLabel.text( calc + '% completed' );
        });
        
        $slider.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 400,
            responsive: [
            {
                breakpoint:768,
                settings: {
                slidesToShow: 3
                }
            },
            {
                breakpoint:390,
                settings: {
                slidesToShow: 1
                }
            }
            ]
        });
    });

    $('.brewery_content .brewery_box .text a').click(function(e) {
        e.preventDefault();
        $(this).next().slideUp(300);

        if($(this).next().css('display') == 'block') {
            $(this).next().slideUp(300);
        } else {
            $(this).next().slideDown(300);
        }
    });

    $('.brewery_item .b_item').click(function(e) {
        e.preventDefault();
        var index = $(".b_item").index(this);
        console.log(index);
        $('.brewery_content > div').css("display", "none");
        $('.brewery_content > div').eq(index).css("display", "block");
    });
});

$(".beforeMenu").on("click", function () {
    $(".wrapper1").slideDown();
    $(".beforeMenu").hide();
    $(".afterMenu").show();
});

    $(".afterMenu").on("click", function () {
    $(".wrapper1").slideUp();
    $(".afterMenu").hide();
    $(".beforeMenu").show();
});

$(function () {
    const logoMenu = $(".footer").offset().top;

    console.log(logoMenu);

    $(window).on("scroll", function (e) {
        console.log($(document).scrollTop());

        if ($(document).scrollTop() > 2300) {
            $(".menu .gnb li a").css("color", "white");
            $(".logo h1 img").attr("src", "../../../images/logo/main_white_logo.png");
        } else {
            $(".menu .gnb li a").css("color", "black");
            $(".logo h1 img").attr("src", "../../../images/logo/detail_black_logo.png");
        }
    });
});