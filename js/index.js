$(document).ready(function() {
  $('.slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 2000,
  });
  AOS.init();
});

var elm = document.querySelector('#main-header');
var ms = new MenuSpy(elm);
