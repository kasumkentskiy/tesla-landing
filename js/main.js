$(function () {
    $('.slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2500,
        fade: true,

    });

    $('.header-btn').on('click', function(){
        $('.menu').addClass('active');
    });
    $('.close-btn').on('click', function(){
        $('.menu').removeClass('active');
    });
    
    ScrollReveal().reveal('.statistics', {
        reset: true,
        // scale: 0.5,
        distance: '100px',
        origin: 'left',
    });
    ScrollReveal().reveal('.advantages', {
        reset: true,
        // scale: 0.5,
        distance: '100px',
        origin: 'top',
    });
    ScrollReveal().reveal('.design', {
        reset: true,
        // scale: 0.5,
        distance: '100px',
        origin: 'bottom',
    });
    ScrollReveal().reveal('footer', {
        reset: true,
        // scale: 0.5,
        distance: '100px',
        origin: 'right',
    });
})













// аккордеон

$(document).ready(function () {
    $('.accordion_title').click(function (event) {
        if ($('.accordion').hasClass('one')) {
            $('.accordion_title').not($(this)).removeClass('active');
            $('.accordion_text').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});

{/* <div class="accordion one">
    <div class="accordion_item">
        <h3 class="accordion_title"> Опен бля</h3>
        <p class="accordion_text">Саламалйеум ьояяяываывар ывапры воап ывоа ыва ыпа оывп</p>
    </div>
    <div class="accordion_item">
        <h3 class="accordion_title"> Опен бля</h3>
        <p class="accordion_text">Саламалйеум ьояяяываывар ывапры воап ывоа ыва ыпа оывп</p>
    </div>
    <div class="accordion_item">
        <h3 class="accordion_title"> Опен бля</h3>
        <p class="accordion_text">Саламалйеум ьояяяываывар ывапры воап ывоа ыва ыпа оывп</p>
    </div>
</div> */}