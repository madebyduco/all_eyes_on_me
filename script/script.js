function applyResponsiveStyles() {
    const desktopView = document.querySelector('.desktop-view');
    const mobileView = document.querySelector('.mobile-view');

    if (window.innerWidth >= 768) {
        // Desktop View
        desktopView.style.display = 'block';
        mobileView.style.display = 'none';
    } else {
        // Mobile View
        desktopView.style.display = 'none';
        mobileView.style.display = 'block';
    }
}

function runIntroAnimations() {
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
    setTimeout(function() {
        $('.arrow-down').css({
            "opacity": "1", "transition": "opacity 0.7s"
        });
    }, 4000);
    setTimeout(function () {
        $('body').css({
            "overflow": "scroll"
        });
    }, 4000);
}

function scrollToContact() {
    window.scrollBy({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('load', applyResponsiveStyles);
window.addEventListener('resize', applyResponsiveStyles);

window.onload = function () {
    const loadingScreen = document.querySelector('.loading-screen');
    if (loadingScreen) {
        loadingScreen.parentNode.removeChild(loadingScreen);
    }

    runIntroAnimations();

    // scrolling animation for arrow CTA
    document.querySelector('.arrow-down').addEventListener('click', scrollToContact);
    document.querySelector('.mobile-view .arrow-down').addEventListener('touchstart', scrollToContact);

    // loading animations

    var $submitButton = $('.input-form button');
    $submitButton.click(function() {
        alert('We have received your email.\n\nYou will receive an invitation soon.');
    });
};