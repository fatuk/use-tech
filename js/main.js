$(function() {
    $('.slider').fractionSlider({
        timeout: 2000,
        pager: true,
        responsive: false
    });

    var isMenuOpened = false;

    $('.js-menuBtn').on('click', function(event) {
        if (!isMenuOpened) {
            $('.js-menu').slideDown('fast');
            isMenuOpened = true;
        } else {
            $('.js-menu').slideUp('fast');
            isMenuOpened = false;
        }
    });

    $(window).on('resize', function() {
        var $menu = $('.js-menu');
        if ($(window).width() >= 1200) {
            $menu.css({
                'display': 'inline-block'
            });
        } else {
            $menu.css({
                'display': 'none'
            });
        }
    });
});