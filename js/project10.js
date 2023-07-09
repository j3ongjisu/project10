$(function () {

  $(window).on('scroll', function () {
    let sct = $(window).scrollTop();
    sct > 0
      ? $('.header').addClass('on')
      : $('.header').removeClass('on');
  });

  $('.mainSlide').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    fade: true,
    pauseOnHover: false,
    pauseOnFocus: false
  });
  // .mainVisual 좌우 화살표 슬라이드 작동 버튼
  $('.mainVisual .arrows .left').on('click', function () {
    $('.mainSlide').slick('slickPrev');
  });
  $('.mainVisual .arrows .right').on('click', function () {
    $('.mainSlide').slick('slickNext');
  });


})