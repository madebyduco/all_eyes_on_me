window.onload = function () {

    // lock scrolling until animation has finished
    $(document).ready(function () {
        $('body').addClass('lock-scroll');

        setTimeout(function () {
            $('body').removeClass('lock-scroll');
        }, 4700);
    });

    // loading animations
    setTimeout(function() {
        $('.main-logo-container').css({
            "opacity": "1", "transition": "opacity 1s"
        });
    }, 300);
    setTimeout(function() {
        $('.video-element-1').css({
            "opacity": "1"
        });
    }, 1300);
    setTimeout(function() {
        $('.video-element-4').css({
            "opacity": "1"
        });
    }, 1700);
    setTimeout(function() {
        $('.video-element-3').css({
            "opacity": "1"
        });
    }, 2100);
    setTimeout(function() {
        $('.video-element-5').css({
            "opacity": "1"
        });
    }, 2500);
    setTimeout(function() {
        $('.video-element-2').css({
            "opacity": "1"
        });
    }, 3200);
    setTimeout(function() {
        $('.header-button').css({
            "opacity": "1", "transition": "opacity 0.7s"
        });
    }, 4000);

    var $submitButton = $('.input-form button');
    $submitButton.click(function() {
        alert('We have received your email.\n\nYou will receive an invitation soon.');
    });

    document.getElementById('input-form').addEventListener('submit', function (e) {
        e.preventDefault();
    });
};