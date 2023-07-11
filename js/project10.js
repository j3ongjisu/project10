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


  $('.main_company .arrows .left').on('click', function () {
    $('.company_slide').slick('slickPrev');
  });
  $('.main_company .arrows .right').on('click', function () {
    $('.company_slide').slick('slickNext');
  });


  $('.company_slide').slick({
    slidesToShow: 3,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });


  $('.main_service .itm').on('click', function () {
    $(this).addClass('on').siblings().removeClass('on');
  });

  $('.tab_link li').on('click', function (event) {
    event.preventDefault();
    let idx = $(this).index(); //0,1,2

    $(this).addClass('on')
      .siblings().removeClass('on');

    //방법 1
    //$('.tab_content .con').removeClass('on');
    // $('.tab_content .con').eq(idx).addClass('on')

    //방법 2
    $('.tab_content .con').eq(idx).addClass('on')
      .siblings().removeClass('on');


    console.log(event, event.target, event.currentTarget, $(this), $(this).index());


  });

})