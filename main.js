document.addEventListener("DOMContentLoaded", function () {

    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 16,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            640: {
                items: 2,
            },
            1024: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        }
    });
});
