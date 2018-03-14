var url = "http://localhost/ventaPasajes/";

$(document).ready(function () {
    $("#btnBuscar").click(function () {

        $.getJSON(url + "rest/get_servicios_fecha.php?f=" + $("#datepicker").val(), function (result) {
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
                    "<td>" + field.salon + "</td>" +
                    "<td>" + field.fecha + "</td>" +
                    "<td>" + field.horaSalida + "</td>" +
                    "<td>$" + field.valor + "</td>" +
                    "<td>" +
                        "<form action='rest/eliminar_servicios.php' method='get'>" +
                            "<input type='hidden' name='s' value='"+field.idServicio+"'>" +
                    "       <input type='submit' id='btnEliminar' value='Eliminar Servicio' class='button is-primary is-outlined'>" +
                    "   </form>" +
                    "</td>" +
                "</tr>");
            });
        });
        $("#resultados").empty();
    });
});