// $('.gallery li').hover(
//   function () {
//     // 타이틀이 있는 li에 hover 해도 클래스추가 하지 않음
//     if (!$(this).find('h3').length) {
//       $('.gallery ul').addClass('black');
//     }
//   },
//   function () {
//     // hover가 끝날 때 항상 클래스 제거
//     if (!$(this).find('h3').length) {
//       $('.gallery ul').removeClass('black');
//     }
//   }
// );


$('.gallery li').mouseenter(function(){
  if (!$(this).find('h3').length) {
     $('.gallery li img').css('filter','brightness(0.5) saturate(150%)');
     $('.gallery .first_item img').css('filter','brightness(1) saturate(150%)');
     $(this).find('img').css('filter','brightness(1) saturate(150%)');
  }
});

$('.gallery li').mouseleave(function(){
  $('.gallery li img').css('filter','brightness(1) saturate(150%)');
});