$(document).ready(function () {
  const $articles = $("li.article");
  const $imageElement = $(".music_box .left img");
  const $audio = $("#main_audio");
  let currnum = 1; // 현재 선택된 사운드 순서
  let ps = false; // false(stop), true(play)

  function updateArticleUI() {
    // 모든 article에서 show 제거 및 hide 추가
    $articles.removeClass("show").addClass("hide");
    $articles.find(".a").stop().slideUp(); // 내용 숨기기
    $articles.find("span i").removeClass().addClass("fas fa-chevron-down"); // 아이콘 업데이트

    // 현재 article만 show 추가 및 hide 제거
    const $currentArticle = $articles.eq(currnum - 1);
    $currentArticle.removeClass("hide").addClass("show");
    $currentArticle.find(".a").stop().slideDown(); // 내용 표시
    $currentArticle.find("span i").removeClass().addClass("fas fa-chevron-up");

    // 이미지 업데이트
    const newImageSrc = `./images/img04-0${(currnum)}.png`;
    $imageElement.attr("src", newImageSrc);
  }

  function changeSound(num) {
    $audio.attr("src", `./music/music0${num}.mp3`)[0].play();
    $("#controlPlay i").removeClass().addClass("fa-solid fa-stop");
    currnum = num;
    ps = true; // 재생 상태
    updateArticleUI();
  }

  function npPlay() {
    $audio.attr("src", `./music/music0${currnum}.mp3`)[0].play();
    $("#controlPlay i").removeClass().addClass("fa-solid fa-stop");
    ps = true; // 재생 상태
    updateArticleUI();
  }

  // 각 article 요소에 클릭 이벤트 추가
  $articles.each(function () {
    const $spanIcon = $(this).find("span i");
    if ($spanIcon.length === 0) {
      $(this).find("span").append('<i class="fas fa-chevron-down"></i>');
    }

    $(this).click(function (e) {
      e.preventDefault();
      const $this = $(this);

      if ($this.hasClass("show")) {
        // 클릭된 상태에서 다시 클릭하면 닫기
        $this.removeClass("show").addClass("hide");
        $this.find(".a").stop().slideUp();
        $this.find("span i").removeClass().addClass("fas fa-chevron-down");

        // 재생 중인 노래 중지
        if (ps) {
          $audio[0].pause();
          $("#controlPlay i").removeClass().addClass("fa-solid fa-play");
          ps = false;
        }
      } else {
        // 다른 모든 article을 닫고 현재만 열기
        currnum = $articles.index($this) + 1;
        npPlay();
      }
    });
  });

  $("#controlPlay").click(function (e) {
    e.preventDefault();
    if (!ps) {
      // 중지 중이면
      $audio[0].play();
      $("#controlPlay i").removeClass().addClass("fa-solid fa-stop");
      ps = true;
    } else {
      // 재생 중이면
      $audio[0].pause();
      $("#controlPlay i").removeClass().addClass("fa-solid fa-play");
      ps = false;
    }
  });

  $("#controlNext").click(function (e) {
    e.preventDefault();
    currnum++;
    if (currnum > $articles.length) currnum = 1; // 순환
    npPlay();
  });

  $("#controlPrev").click(function (e) {
    e.preventDefault();
    currnum--;
    if (currnum < 1) currnum = $articles.length; // 순환
    npPlay();
  });
});
