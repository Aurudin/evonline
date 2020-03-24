$(document).foundation();

$(document).ready(function () {
    $("#owlServicos, #owlNegocios").owlCarousel({
        items: 3,
        lazyLoad: true,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1025: {
                items: 3
            }
        }
    });
});

$(document).ready(function () {
    $("#owlClientes").owlCarousel({
        items: 7,
        lazyLoad: true,
        nav: true,
        loop: true,
        autoplay: true,
        dots: false,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 2
            },
            480: {
                items: 3
            },
            768: {
                items: 5
            },
            1280: {
                items: 7
            }
        }
    });
});

$(document).ready(function () {
    $("#owlDepoimentos").owlCarousel({
        items: 1,
        lazyLoad: true,
        nav: true,
        dots: true,
        loop: true,
        autoplay: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    });
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 5) {        
        $('.logo img').attr('src', 'img/webp/marca-evonline-sticky.webp');
        $('.logo source[type="image/webp"]').attr('srcset', 'img/webp/marca-evonline-sticky.webp');
        $('.logo source[type="image/png"]').attr('srcset', 'img/webp/marca-evonline-sticky.webp');
    }
    else {        
        $('.logo img').attr('src', 'img/webp/marca-evonline.webp');
        $('.logo source[type="image/webp"]').attr('srcset', 'img/webp/marca-evonline.webp');
        $('.logo source[type="image/png"]').attr('srcset', 'img/webp/marca-evonline.webp');
    }    
});

$(window).ready(function () {
    $('.callTopbar').on('click', function () {        
        if ($('.callTopbar i').hasClass('fas fa-chevron-down')) {
            $('.callTopbar i').removeClass('fas fa-chevron-down').addClass('fas fa-chevron-up');
        } else {
            $('.callTopbar i').removeClass('fas fa-chevron-up').addClass('fas fa-chevron-down');            
        }
        jQuery(".topBar").toggle();
    });
});

$(document).ready(function(){
    var behavior = function (val) {
        return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    },
    options = {
        onKeyPress: function (val, e, field, options) {
            field.mask(behavior.apply({}, arguments), options);
        }
    };
    
    $('#tel').mask(behavior, options);
});