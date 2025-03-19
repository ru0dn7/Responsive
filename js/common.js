// main visual video & img ------------------------------------------------------------------------------------------------
$(window).on('scroll', function () { // 스크롤 값의 변화가 생기면
    var scroll = $(window).scrollTop(); // 스크롤의 거리
    var win_height = $(window).height();
    var header_height = $('header').height();
    var window_width = $(window).width();

    if (scroll > win_height) { // 특정 거리 이상의 스크롤
        $('.topMove').fadeIn('slow'); // topMove 요소 보여줌
    } else {
        $('.topMove').fadeOut('fast'); // topMove 요소 숨김
    }

    if (window_width > 768) { // 너비가 768보다 클 때만 실행
        if (scroll > win_height - header_height) { // 헤더 관련 효과 적용
            $('#headerArea').addClass("active"); // 스크롤이 videoBox 배경 높이만큼 내려오면 active 클래스 추가
        } else {
            $('#headerArea').removeClass("active"); //  active 클래스 추가
        }
    }
});

// 더보기 버튼 hover 효과  ------------------------------------------------------------------------------------------------
document.querySelectorAll('.reverse a').forEach(button => button.innerHTML = '<div><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>');

// 탑 버튼 스르륵 ------------------------------------------------------------------------------------------------
$('.topMove').click(function (e) {
    e.preventDefault();
    //상단으로 스르륵 이동합니다.
    $("html,body").stop().animate({
        "scrollTop": 0
    }, 1000);
});


// 768 이하 사이즈 헤더 햄버거 메뉴 ------------------------------------------------------------------------------------------------
// 오른쪽에서 날아오는 효과, fade효과
$(".menuOpen").click(function (e) {
    e.preventDefault();
    $('.box').animate({
        opacity: 1
    }, 500).show();
    $("#gnb").animate({
        right: 0,
        opacity: 1
    }, 500);
});

$(".close, .box").click(function (e) {
    e.preventDefault();
    $('.box').animate({
        opacity: 0
    }, 500).hide();
    $("#gnb").animate({
        right: '-100%',
        opacity: 0
    }, 500);
});

var current = 0; // 1(소형테블릿이상) , 0(모바일)
$(window).resize(function () { //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
    var screenSize = $(window).width();
    if (screenSize > 768) { //소형테블릿 이상
        $("#gnb").css({
            right: 0,
            opacity: 1
        });
        //   $("#gnb").height('auto');
        current = 1;
    }
    if (current == 1 && screenSize <= 768) {
        $("#gnb").css({
            right: '-100%',
            opacity: 0
        });
        // $("#gnb").height(documentHeight);
        current = 0;
    }
});


