$(document).ready(function () {

    /* Every time the window is scrolled ... */
    $(window).scroll(function () {

        /* Check the location of each desired element */
        $('.fadein').each(function (i) {

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height+200();

            /* If the object is completely visible in the window, fade it */
            if (bottom_of_window > bottom_of_object) {

                $(this).animate({ 'opacity': '1' }, 700);
            }
        });
    });

    $('.navFade').stop(true).delay(500).fadeIn({
        duration: 500,
        queue: false
    }).css('display', 'none').delay(300).slideDown(1000);

    $(".headerFade").hide().fadeIn(1000);

    $(".delayedFade").hide().delay(2000).fadeIn(1000);

});
