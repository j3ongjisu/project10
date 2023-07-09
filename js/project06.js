$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0
            ? $('.header').addClass('on')
            : $('.header').removeClass('on');
    });

    // 768px 이하일 때 모바일 탭 메뉴 버튼 눌러짐
    $('.mobile_btn').on('click', function () {
        $(this).toggleClass('on');
        $('.gnb').toggleClass('on');
        $('.h1').toggleClass('on');
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


    $('.productSlide').slick({
        slidesToShow: 3,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    // .mainProduct 좌우 화살표 슬라이드 작동 버튼
    $('.mainProduct .prdArrows .left').on('click', function () {
        $('.productSlide').slick('slickPrev');
    });
    $('.mainProduct .prdArrows .right').on('click', function () {
        $('.productSlide').slick('slickNext');
    });


    // history tab 메뉴
    $('.history_menu li').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $('.history_content li').eq(idx).addClass('on').siblings().removeClass('on');

    });



    //to_top
    //to_top 스크롤 위로 올리기
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 600)
    });

    // to_top 스크롤 숨겼다가 나타내기
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        // sct > 1000 ? $('.to_top').fadeIn(1000) : $('.to_top').fadeOut();
        sct > 400 ? $('.to_top').addClass('on') : $('.to_top').removeClass('on');
    });

})