$(document).ready(function () {
    $(".menu-toggler").click(function () {
        $(this).toggleClass('opened');
        $(".main-menu").slideToggle(200);
    })
    var sticky = $(".sticky-nav")
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $(".sticky-nav").addClass("colored");
        } else {
            $(".sticky-nav").removeClass("colored");
        }
    })


})