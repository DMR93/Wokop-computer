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

    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000
    });

    $('.comentarios').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000
    });
    AOS.init();
    $.cookieBar();
});

var options = {

  activeClass: 'active',
}
var elm = document.querySelector('#main-header');
var ms = new MenuSpy(elm, options);
