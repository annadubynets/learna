$('.testimonials .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        1000:{
            items:2
        }
    }
});

$(function() {
    var header = $(".start-style");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 10) {
            header.removeClass('start-style').addClass("scroll-on");
        } else {
            header.removeClass("scroll-on").addClass('start-style');
        }
    });
});

$(function() {
    var input = document.querySelector("#phone");
    window.intlTelInput(input, {
        separateDialCode: true
    });
});

$(function() {
    var input = document.querySelector("#phoneMobile");
    window.intlTelInput(input, {
        separateDialCode: true
    });
});
