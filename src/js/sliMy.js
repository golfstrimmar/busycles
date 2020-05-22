
$(Document).ready(function () {
  $(".slider-container").slick({
    arrows: true,
    dots: true,
    slidesToShow: 1,
    // infinite: false,
    slideToscroll: 1,
    speed: 800,
    easing: "ease",

    rows: 1,
    nextArrow: $(".control-main-slider__arrow_next"),
    prevArrow: $(".control-main-slider__arrow_prev"),
    responsive: [
      {
        breakpoint: 819,
        settings: {
          arrows: false,
          // centerMode: true,
          // centerPadding: "40px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,

          // centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });
});
