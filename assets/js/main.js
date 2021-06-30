/* Scroll to top */
$(".go-to-top").click(function (event) {
    $("html").animate({
            scrollTop: 0,
        },
        800,
    );
});
/* Smooth Scroll */
$(document).ready(function () {
    $(".link-smooth").click(function (event) {
        event.preventDefault();

        var smoothScroll = this.hash;

        $("html").animate({
                scrollTop: $(smoothScroll).offset().top - 65,
            },
            800,
        );
    });
});
/* Scroll Top */
/* Tooltip */
$('[data-toggle="tooltip"]').tooltip()

/* Carousel */
$('.carousel').carousel({
    interval: 3000
})
/* Background Topbar inverse */
$(window).scroll(function () {
    if ($("#navbar").offset().top > 66) {
        $("#navbar").addClass("bg-new");
    } else {
        $("#navbar").removeClass("bg-new");
    }
});