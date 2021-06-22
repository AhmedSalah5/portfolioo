$(document).ready(function () {
    $(".menu-toggler").click(function () {
        $(this).toggleClass('opened');
        $(".main-menu").slideToggle(200);
    })
})