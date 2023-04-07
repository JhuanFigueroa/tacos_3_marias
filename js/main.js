(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {

        

            //Formulario

        let nombre = document.getElementById("nombre");
        let mail = document.getElementById("mail");
        let telefono=document.getElementById("telefono");
        let numero=document.getElementById("numero");
        let divError = document.getElementById("error");
        let btnEnviar=document.getElementById("btnEnviar");
        let pueblo=document.getElementById("pueblo");
        let mensaje=document.getElementById("comentarios");
        btnEnviar.disabled=true;
        if (btnEnviar.disabled==true) {
            btnEnviar.style.opacity=0.5;
        }

        if (document.getElementById("btnEnviar")) {
            nombre.addEventListener("blur", validarCampos);
            mail.addEventListener("blur", validarCampos);
            telefono.addEventListener("blur", validarCampos);
            numero.addEventListener("blur", validarCampos);
            mensaje.addEventListener("blur",validarMensaje);

            function validarCampos() {
                if (this.value == '') {
                    divError.style.display = 'block';
                    divError.innerHTML = "Este campo es obligatorio!";
                    this.style.borderBottomColor="red";
                } else {
                    divError.style.display = 'none';
                }
            }
    
           function validarMensaje() {
                if (this.value == '') {
                    
                } else {
                    btnEnviar.disabled=false;
                    if (btnEnviar.disabled==false) {
                        btnEnviar.style.opacity=1;
                    }
                }
            }
        }

        

    });//DOMContentLoaded
}());

//jQery
$(function () {


    //Menu fijo
    var windowHeigth = $(window).height();
    var alturaBarra = $('.barra-navegacion').innerHeight();

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > windowHeigth) {
            $('.barra-navegacion').addClass('fixed');
            $('body').css({ 'margin-top': alturaBarra + "px" });
        } else {
            $('.barra-navegacion').removeClass('fixed');
            $('body').css({ 'margin-top': "0px" });
        }

    });


    //Menu Responsive
    $('.menu-movil').on('click', function () {
        $('.menu').slideToggle();
    });

    //Color box
    //ColorBox
    $('.taco-info').colorbox({ inline: true, width: "50%" });


    //Scroll suave
    $(".link").on("click", function (e) {
        // 1
        e.preventDefault();
        // 2
        const href = $(this).attr("href");
        // 3
        $("html, body").animate({ scrollTop: $(href).offset().top }, 900);
      });

});


