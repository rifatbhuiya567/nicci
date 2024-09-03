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
})(jQuery);