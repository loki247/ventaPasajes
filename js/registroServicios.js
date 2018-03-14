var url = "http://localhost/ventaPasajes/";

$(document).ready(function () {

    //Bus
    $.getJSON(url + "rest/get_buses.php", function (result) {
        $.each(result, function (i, field) {
            $("#opcBus").append("<option value='" + field.id + "'>" + field.patente + "</option>");
        });
    });

    //Origen
    $.getJSON(url + "rest/get_ciudad.php", function (result) {
        $.each(result, function (i, field) {
            $("#opcOrigen").append("<option value='" + field.id + "'>" + field.nombre + "</option>");
        });
    });


    //Destino
    $.getJSON(url + "rest/get_ciudad.php", function (result) {
        $.each(result, function (i, field) {
            $("#opcDestino").append("<option value='" + field.id + "'>" + field.nombre + "</option>");
        });
    });
    
    var fecha =  $("#datepicker").val();
    var horaSalida = $("#horaSalida").val();
    var horaLlegada = $("#horaLlegada").val();
    var busId;
    $("#opcBus").change(function () {
        busId= $("#opcBus").val();
    });
    var origenId;
    $("#opcOrigen").change(function () {
        origenId = $("#opcOrigen").text();
    });
    var destinoId;
    $("#opcDestino").change(function () {
        destinoId = $("#opcDestino").text();
    });
    var valor = $("#valor").val();

    console.log(fecha, horaSalida, horaLlegada, busId, origenId, destinoId, valor);
   
});