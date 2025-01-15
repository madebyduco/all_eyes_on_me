window.onload = function () {

    // lock scrolling until animation has finished
    $(document).ready(function () {
        $('body').addClass('lock-scroll');

        setTimeout(function () {
            $('body').removeClass('lock-scroll');
        }, 4700);
    });

    function scrollToContact() {
        window.scrollBy({
            top: window.innerHeight,
            left: 0,
            behavior: 'smooth'
        });
    }

    // scrolling animation for arrow CTA
    document.querySelector('.arrow-down').addEventListener('click', scrollToContact);
    document.querySelector('.mobile-view .arrow-down').addEventListener('touchstart', scrollToContact);

    // scrolling animation on scroll detect
//     let currentPosition = 0;
//     let lastScroll = 0;

//     window.addEventListener('wheel', function(event) {
//         const delta = event.deltaY; // Positive for scrolling down, negative for up

//         if (delta > 0 && currentPosition === 0) {
//             // Scrolling down, move to 100vh
//             currentPosition = 1;
//             document.getElementByClass('desktop-view').style.transform = 'translateY(-100vh)';
//             console.log("detected scroll down");
//         } else if (delta < 0 && currentPosition === 1) {
//             // Scrolling up, move to 0vh
//             currentPosition = 0;
//             document.getElementByClass('desktop-view').style.transform = 'translateY(0)';
//             console.log("detected scroll up");
//         }
//     });

//     let startY = 0;

// window.addEventListener('touchstart', (event) => {
//     startY = event.touches[0].clientY;
// });

// window.addEventListener('touchend', (event) => {
//     const endY = event.changedTouches[0].clientY;
//     const deltaY = endY - startY;

//     if (deltaY < -50 && currentPosition === 0) {
//         // Swipe down
//         currentPosition = 1;
//         document.getElementByClass('mobile-view').style.transform = 'translateY(-100vh)';
//     } else if (deltaY > 50 && currentPosition === 1) {
//         // Swipe up
//         currentPosition = 0;
//         document.getElementByClass('mobile-view').style.transform = 'translateY(0)';
//     }
// });

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
    setTimeout(function() {
        $('.arrow-down').css({
            "opacity": "1", "transition": "opacity 0.7s"
        });
    }, 4000);

    var $submitButton = $('.input-form button');
    $submitButton.click(function() {
        alert('We have received your email.\n\nYou will receive an invitation soon.');
    });
};