$(document).ready(function(){
  AOS.init();



  $('.header-btn').mouseenter(function(){
    let result = $(this).attr('data-alt');

    $(`#${result}`).addClass('active');
    $(`#${result}`).siblings().removeClass('active');

  });
  $('.sub-menu-box').mouseleave(function(){
    $(this).removeClass('active')
  });

  $('.sub-in-box').click(function(){
    $(this).toggleClass('active')
    $(this).siblings().removeClass('active')
  });
  $('.sub-in-box').mouseenter(function(){
    $(this).siblings().removeClass('active')
  });

  $('#hamburger').click(function(){
    $(this).toggleClass('active')
    $('.hamburger-box').toggleClass('active')
  });



    //섹션-2 카드 스와이퍼
    var swiper = new Swiper(".sec-2-mySwiper", {
        effect: "cards",
        grabCursor: true,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      });

      var swiper = new Swiper(".vertical", {
        direction: "vertical",
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    //섹션-3 스와이퍼
    var swiper = new Swiper(".sec-3-mySwiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });  

    $('.icon-box').click(function(){
      let icon = $(this).attr('data-alt');

      $(`#${icon}`).slideToggle('active');
      $(`#${icon}`).siblings().removeClass('active');

    });

}); 