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

  var slider = tns({
     container: '.galeria-slider',
     items: 1,
     arrowKeys: true,
     controls: false,
     slideBy: 'page',
     autoplay: true,
     autoplayButtonOutput: false,
     nav: false,
     mouseDrag: false,
     autoHeight: true,
   });
   var slider = tns({
      container: '.opiniones-slider',
      items: 1,
      slideBy: 'page',
      autoplay: true,
      controls: false,
      autoplayButtonOutput: false,
      nav: false,
      mouseDrag: false,
    });

    AOS.init();

    $('.cookie-message').cookieBar({ closeButton : '.my-close-button'});
});

var options = {
  activeClass: 'active',
}
var elm = document.querySelector('header nav');
var ms = new MenuSpy(elm, options);
