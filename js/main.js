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
        if($(this).scrollTop()>170){
            $('.blue-line-menu').addClass('fixed');
        }
        else if ($(this).scrollTop()<170){
            $('.blue-line-menu').removeClass('fixed');
        }
    });
});
function calculateSum (){
    var sum = 0;
    var count = 0;
    $("input[data-price]").each(function(){
        var c=parseInt($(this).val());
        count+=c;
        sum+=parseInt($(this).data("price"))*c;
    });

    $(".js-count-total").text(count);
    $(".js-sum-total").text(sum);
    $(".js-sum-total-value").val(sum);
}
$('.minus').on("click",function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 0 ? 0 : count;
    $input.val(count);
    calculateSum();
    $(this).parent().parent().siblings('.card-title-sum').text($input.val()*parseInt($input.data('price')));
    return false;
});
$('.plus').click(function (event) {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    calculateSum();
    $(this).parent().parent().siblings('.card-title-sum').text($input.val()*parseInt($input.data('price')));

    return false;
});

$('#checkbox-legal').click(function(){
    if ($(this).is(':checked')){
        $('.text-legal-entity').show(100);
    } else {
        $('.text-legal-entity').hide(100);
    }
});
$('#checkbox-montage').click(function(){
    if ($(this).is(':checked')){
        $('.text-montage').show(100);
    } else {
        $('.text-montage').hide(100);
    }
});

$('#delivery-radio').click(function(){
    if ($(this).is(':checked')){
        $('.inputs-delivery').show(100);
    } else {
        $('.inputs-delivery').hide(100);
    }
});