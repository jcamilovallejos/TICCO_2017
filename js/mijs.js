$( document ).ready(function() {
    $('.slider').slider();
    $(".dropdown-button").dropdown();
    $(".button-collapse").sideNav();
    $('body').find('img[src$="https://cloud.githubusercontent.com/assets/23024110/20663010/9968df22-b55e-11e6-941d-edbc894c2b78.png"]').parent().closest('a').closest('div').remove();
    console.log("Estamos bloqueando la imagen de 000webhosting");
});