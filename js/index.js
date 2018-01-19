var testimonios = [
    { imagen: 'img/mobile-phon-2.png', text: 'bla bla bla bal' },
    { imagen: 'img/mobile-phon-7.png', text: 'blube blueb belue' },
    { imagen: 'img/mobile-phon-7.png', text: 'blube blueb belue' }
];


function cargarTestimonios() {
    for (var i = 0; i < testimonios.length; i++) {
        var testimonio = '<div><img src="' + testimonios[i].imagen + '"><p>' + testimonios[i].text + '</p></div>';
        $('#contenedor-testimonio').append(testimonio);
    }
}

$(document).ready(function () {
    cargarTestimonios();
    tippy('.btn', {
      placement: 'top',
      trigger: 'click',
      animation: 'scale',
      inertia: true,
});

    /*$('.slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    });*/
    $('.slider').owlCarousel({
        slidesToShow: 3,
        autoplay: true,
    		items : 6,
    		navigation: true,
    		navigationText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
});

    AOS.init();
    $('.cookie-message').cookieBar({ closeButton : '.my-close-button'});
});

var options = {
  activeClass: 'active',
}
var elm = document.querySelector('header nav');
var ms = new MenuSpy(elm, options);
