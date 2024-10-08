(function () {
    "use-strict";

    $(window).scroll(function(){
        let scrolling = $(this).scrollTop();

        if(scrolling > 80) {
            $(".main-header").addClass("sticky-header")
        }else{
            $(".main-header").removeClass("sticky-header")
        }
    });

    $(window).load(function () {
        $('.ad-banner').show(500);
    });

    $('.ad-banner-content .close-btn button').on('click', function () {
        $('.ad-banner').hide(500);
    });
    
    $('#btn-search').on('click', function () {
        $('.header-searchbar').toggle(500);
    });
    
    $('#btn-search-mobile').on('click', function () {
        $('.header-searchbar').toggle(500);
    });

    $('.arrow.one').on('click', function () {
        $('.dropdown-items.one').toggle(500);
        $('.arrow.one').toggleClass('active');
    });

    $('.arrow.two').on('click', function () {
        $('.dropdown-items.two').toggle(500);
        $('.arrow.two').toggleClass('active');
    });

    $('.arrow.three').on('click', function () {
        $('.dropdown-items.three').toggle(500);
        $('.arrow.three').toggleClass('active');
    });

    $('.arrow.four').on('click', function () {
        $('.dropdown-items.four').toggle(500);
        $('.arrow.four').toggleClass('active');
    });

    particlesJS('particles-js',
    {
        "particles": {
        "number": {
            "value": 60,
            "density": {
            "enable": true,
            "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "triangle",
            "stroke": {
            "width": 0,
            "color": "#000000"
            },
            "polygon": {
            "nb_sides": 5
            },
            "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
            }
        },
        "size": {
            "value": 5,
            "random": true,
            "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
            }
        }
        },
        "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
            "enable": true,
            "mode": "repulse"
            },
            "onclick": {
            "enable": true,
            "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
            "distance": 400,
            "line_linked": {
                "opacity": 1
            }
            },
            "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
            },
            "repulse": {
            "distance": 200
            },
            "push": {
            "particles_nb": 4
            },
            "remove": {
            "particles_nb": 2
            }
        }
        },
        "retina_detect": true,
        "config_demo": {
        "hide_card": false,
        "background_color": "transparent",
        "background_image": "",
        "background_position": "50% 50%",
        "background_repeat": "no-repeat",
        "background_size": "cover"
        }
    }

    );
})(jQuery);

