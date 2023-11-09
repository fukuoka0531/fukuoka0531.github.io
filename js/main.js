$(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.nav-list').addClass('active');
        } else {
            $('.nav-list').removeClass('active');
        }
        if ($(this).hasClass('active')) {
            $('.sp-nav').addClass('active');
        } else {
            $('.sp-nav').removeClass('active');
        }
    });
});