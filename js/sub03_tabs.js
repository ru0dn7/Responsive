	// 섹션별 위치를 저장할 변수
let sec1, sec2, sec3, sec4 = 0;

setTimeout(function () {
    sec1 = $('.surfing').offset().top;
    sec2 = $('.paragliding').offset().top;
    sec3 = $('.diving').offset().top;
    sec4 = $('.atv').offset().top;
    // console.log(sec1, sec2, sec3, sec4);
}, 100);

function menu_on() {
    let ht = $(window).height();
    let scroll = $(window).scrollTop();
    let hh = ht / 2;

    if (scroll >= sec1 - hh && scroll < sec2 - hh) {
        $("#menu li").removeClass("on");
        $("#menu li").eq(0).addClass("on");
    } else if (scroll >= sec2 - hh && scroll < sec3 - hh) {
        $("#menu li").removeClass("on");
        $("#menu li").eq(1).addClass("on");
    } else if (scroll >= sec3 - hh && scroll < sec4 - hh) {
        $("#menu li").removeClass("on");
        $("#menu li").eq(2).addClass("on");
    } else if (scroll >= sec4 - hh) {
        $("#menu li").removeClass("on");
        $("#menu li").eq(3).addClass("on");
    } else {
        $("#menu li").removeClass("on");
    }
}

$(window).on("scroll", function () {
    menu_on();
});

$(window).on("resize", function () {
    sec1 = $('.surfing').offset().top;
    sec2 = $('.paragliding').offset().top;
    sec3 = $('.diving').offset().top;
    sec4 = $('.atv').offset().top;
    // console.log(sec1, sec2, sec3, sec4);
});

function setupMenu() {
    const menuItems = document.querySelectorAll("#menu li a");

    menuItems.forEach(function (menuItem, menuIdx) {
        menuItem.addEventListener("click", function (e) {
            e.preventDefault();

            $("#menu li").removeClass("on");
            $(menuItem).parent().addClass("on");

            let targetOffset;
            if (menuIdx === 0) targetOffset = sec1;
            else if (menuIdx === 1) targetOffset = sec2;
            else if (menuIdx === 2) targetOffset = sec3;
            else if (menuIdx === 3) targetOffset = sec4;

            $("html, body").animate({ scrollTop: targetOffset - 50 }, 400);
        });
    });
}

function tabletMenu() {
    const winW = window.innerWidth;
    const menuLists = document.querySelectorAll("#menu li a");

    menuLists.forEach((menuList, idx) => {
        if (winW <= 768) {
            if (!menuList.dataset.originalText) {
                menuList.dataset.originalText = menuList.textContent;
            }
            menuList.textContent = `${idx + 1}`;
            menuList.style.fontSize = "1.3rem";
        } else {
            if (menuList.dataset.originalText) {
                menuList.textContent = menuList.dataset.originalText;
                menuList.style.fontSize = "";
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    setupMenu();
    tabletMenu();
});

window.addEventListener("resize", function () {
    tabletMenu();
});
