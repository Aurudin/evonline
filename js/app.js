$(document).foundation();

$(function() {
  $('nav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('is-active');
});

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
        items: 6,
        lazyLoad: true,
        nav: false,
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
                items: 6
            }
        }
    });
});

$(document).ready(function () {
  $("#owlAgencia").owlCarousel({
      items: 12,
      lazyLoad: true,
      nav: false,
      loop: true,
      autoplay: true,
      dots: false,
      touchDrag: false,
      mouseDrag: false,      
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
          items: 8
        },
        1366: {
          items: 9
        },
        1400: {
          items: 12
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
    if ((scroll > 35) && (screen.width >= 768)) {        
        $('.logo img').attr('src', 'img/webp/marca-evonline-sticky.webp');
        $('.logo source[type="image/webp"]').attr('srcset', 'img/webp/marca-evonline-sticky.webp');
        $('.logo source[type="image/png"]').attr('srcset', 'img/webp/marca-evonline-sticky.webp');
    }
    else {        
        $('.logo img').attr('src', 'img/webp/marca-negativa.webp');
        $('.logo source[type="image/webp"]').attr('srcset', 'img/webp/marca-negativa.webp');
        $('.logo source[type="image/png"]').attr('srcset', 'img/webp/marca-negativa.webp');
    }    
});
/*
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
*/
/* lazyload.js (c) Lorenzo Giuliani
 * MIT License (http://www.opensource.org/licenses/mit-license.html)
 *
 * expects a list of:  
 * `<img src="blank.gif" data-src="my_image.png" width="600" height="400" class="lazy">`
 */

!function(window){
    var $q = function(q, res){
          if (document.querySelectorAll) {
            res = document.querySelectorAll(q);
          } else {
            var d=document
              , a=d.styleSheets[0] || d.createStyleSheet();
            a.addRule(q,'f:b');
            for(var l=d.all,b=0,c=[],f=l.length;b<f;b++)
              l[b].currentStyle.f && c.push(l[b]);
  
            a.removeRule(0);
            res = c;
          }
          return res;
        }
      , addEventListener = function(evt, fn){
          window.addEventListener
            ? this.addEventListener(evt, fn, false)
            : (window.attachEvent)
              ? this.attachEvent('on' + evt, fn)
              : this['on' + evt] = fn;
        }
      , _has = function(obj, key) {
          return Object.prototype.hasOwnProperty.call(obj, key);
        }
      ;
  
    function loadImage (el, fn) {
      var img = new Image()
        , src = el.getAttribute('data-src');
      img.onload = function() {
        if (!! el.parent)
          el.parent.replaceChild(img, el)
        else
          el.src = src;
  
        fn? fn() : null;
      }
      img.src = src;
    }
  
    function elementInViewport(el) {
      var rect = el.getBoundingClientRect()
  
      return (
         rect.top    >= 0
      && rect.left   >= 0
      && rect.top <= (window.innerHeight || document.documentElement.clientHeight)
      )
    }
  
      var images = new Array()
        , query = $q('img.lazy')
        , processScroll = function(){
            for (var i = 0; i < images.length; i++) {
              if (elementInViewport(images[i])) {
                loadImage(images[i], function () {
                  images.splice(i, i);
                });
              }
            };
          }
        ;
      // Array.prototype.slice.call is not callable under our lovely IE8 
      for (var i = 0; i < query.length; i++) {
        images.push(query[i]);
      };
  
      processScroll();
      addEventListener('scroll',processScroll);
  
  }(this);

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

