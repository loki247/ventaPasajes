var url = "http://localhost/ventaPasajes/";


$(document).ready(function () {

    //Origen
    $.getJSON(url + "rest/get_ciudad.php", function (result) {
        $.each(result, function (i, field) {
            $("#opcOrigen").append("<option value='" + field.idCiudad + "'>" + field.nombre_ciudad + "</option>");
            $("#opcOrigen").change(function () {
                console.log("ID Origen: " + $("#opcOrigen").val());
            });
        });
    });


    //Destino
    $.getJSON(url + "rest/get_ciudad.php", function (result) {
        $.each(result, function (i, field) {
            $("#opcDestino").append("<option value='" + field.idCiudad + "'>" + field.nombre_ciudad + "</option>");
            $("#opcDestino").change(function () {
                console.log("ID Destino: " + $("#opcDestino").val());
            });
        });
    });

    //Realizar Consulta
    $("#btnBuscar").click(function () {

        $.getJSON(url + "rest/get_servicios_origenDestino.php?o=" + $("#opcOrigen").val() + "&d=" + $("#opcDestino").val() + "&f=" + $("#datepicker").val(), function (result) {
            $("#resultados").append
                ("<tr>" +
                "<th>Origen</th>" +
                "<th>Destino</th>" +
                "<th>Salón</th>" +
                "<th>Fecha</th>" +
                "<th>Hora de Salida</th>" +
                "<th>Valor</th>" +
                "</tr>");
            $.each(result, function (i, field) {
                console.log("Fecha: "+ field.fecha);
                $("#resultados").append
                    ("<tr>" +
                        "<td>" + field.origen + "</td>" +
                        "<td>" + field.destino + "</td>" +
                        "<td>" + field.nombre_salon + "</td>" +
                        "<td>" + field.fecha_salida + "</td>" +
                        "<td>" + field.hora_salida + "</td>" +
                        "<td>$" + field.valor + "</td>" +
                        "<td>" +
                        "<form action='disponibilidad.php' method='get'>" +
                            "<input type='hidden' name='idBus' value='" + field.bus_idbus + "'>" +
                            "<input type='hidden' name='origen' value='" + field.origen + "'>" +
                            "<input type='hidden' name='destino' value='" + field.destino + "'>" +
                            "<input type='hidden' name='fecha' value='" + field.fecha_salida + "'>" +
                            "<input type='hidden' name='horaSalida' value='" + field.hora_salida + "'>" +
                            "<input type='hidden' name='valor' value='" + field.valor + "'>" +
                            "<input type='hidden' name='salon' value='" + field.nombre_salon + "'>" +
                            "<input type='hidden' name='idSalon' value='" + field.idSalon + "'>" +
                            "<input type='hidden' name='idOrigen' value='" + $("#opcOrigen option:selected").val()+ "'>" +
                            "<input type='hidden' name='idDestino' value='" + $("#opcDestino option:selected").val()+ "'>" +
                            "<input type='submit' id='btnDisponibilidad' value='Ver Disponibilidad' class='button is-primary is-outlined'>" +
                        "</form>" +
                        "</td>" +
                    "</tr>");
            });
        });
        $("#resultados").empty();
    });
});
