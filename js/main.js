$(document).ready(function () {
    $(".navbar-toggle").on("click", function () {
        $(this).toggleClass("active");
    });
});
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:0,
    nav:true,
    dots:true,
    autoplay:true,
    autoplayTimeout:4000,
    smartSpeed: 700,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('autoplay.play.owl',[4000])
})
$('.stop').on('click',function(){
    owl.trigger('autoplay.stop.owl')
})

var itemsCount=5;
if (window.matchMedia("(max-width: 991px)").matches) {
    itemsCount=3;
}
if (window.matchMedia("(max-width: 767px)").matches) {
    itemsCount=2;
}
if (window.matchMedia("(max-width: 500px)").matches) {
    itemsCount=1;
}
var owl = $('.owl-carousel2');
owl.owlCarousel({
    items:itemsCount,
    loop:true,
    margin:0,
    nav:true,
    dots: false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});


jQuery(function($) {
    $(window).scroll(function(){
        if($(this).scrollTop()>390){
            $('.blue-line-menu').addClass('fixed');
        }
        else if ($(this).scrollTop()<390){
            $('.blue-line-menu').removeClass('fixed');
        }
    });
});

