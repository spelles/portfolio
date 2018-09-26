$(document).ready(function () {
    var $window = $(window),
        $fadeIn = $('.fadein'),
        $navFace = $('.navFade'),
        $headerFade = $(".headerFade"),
        $delayedFade = $(".delayedFade"),
        fadeInSpeed = 1000,
        slideDownSpeed = 1000,
        navFaceDelay = 500,
        navFaceDelayHide = 300;

    /* Every time the window is scrolled ... */
    $window.scroll(function () {

        /* Check the location of each desired element */
        $fadeIn.each(function () {
            var offsetHeight = 200;
            var $this = $(this);
            var bottom_of_object = $this.offset().top + $this.outerHeight();
            var bottom_of_window = $window.scrollTop() + ($window.height() + offsetHeight);
            var windowCollideWithObject = (bottom_of_window > bottom_of_object);

            /* If the object is completely visible in the window, fade it */
            if (windowCollideWithObject) {
                $this.animate({
                    opacity: 1
                }, 700);
            }
        });
    });

    $navFace
        .stop(true)
        .delay(navFaceDelay)
        .fadeIn({
            duration: navFaceDelay,
            queue: false
        })
        .css('display', 'none')
        .delay(navFaceDelayHide)
        .slideDown(slideDownSpeed);

    $headerFade
        .hide()
        .fadeIn(fadeInSpeed);

    $delayedFade
        .hide()
        .delay(2000)
        .fadeIn(fadeInSpeed);
});