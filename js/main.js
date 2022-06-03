$(document).ready(function () {
  $(".hero__slider").slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});

$(document).ready(function () {
  $(".slider__items").slick({
    arrows: false,
    dots: true,
    fade: true,
  });
});

// $(document).ready(function () {
//   $("#menu").on("click", "a", function (event) {
//     //отменяем стандартную обработку нажатия по ссылке
//     event.preventDefault();
//     //забираем идентификатор бока с атрибута href
//     var id = $(this).attr("href"),
//       //узнаем высоту от начала страницы до блока на который ссылается якорь
//       top = $(id).offset().top;
//     //анимируем переход на расстояние - top за 1500 мс
//     $("body,html").animate({ scrollTop: top }, 3000);
//   });
// });
