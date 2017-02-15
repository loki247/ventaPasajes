$(document).ready(function () {

    $("#barraSuperior").append(
        "<div class='nav-left'>"+
            "<p>Sistema de Venta de Pasajes</p>"+
        "</div>" +

        "<span class='nav-toggle'>"+
        "<span></span>"+
        "<span></span>"+
        "<span></span>"+
        "</span>" +

        "<div class='av-right nav-menu'>"+
            "<a class='nav-item is-tab is-active'>Inicio</a>"+

            "<a class='av-item is-tab' href='ventaPasajes.html'>Venta Pasajes</a>"+

            "<a class='nav-item is-tab' href='registro_servicios.html'>Modificar Servicios</a>"+
        "</div>");
});