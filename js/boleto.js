$(document).ready(function () {
    function getGET(){
        var loc = window.location.href;
        var getString = loc.split('?')[1];
        var GET = getString.split('&');
        var get = {};//this object will be filled with the key-value pairs and returned.

        for(var i = 0, l = GET.length; i < l; i++){
            var tmp = GET[i].split('=');
            get[tmp[0]] = unescape(decodeURI(tmp[1]));
        }
        return get;
    }

    var datos = getGET();

    if (datos.paradero.indexOf("+") != -1) {
        $("#contenidoBoleto").append
        ("<tr>" +
        "<td>Servicio: " + datos.origen + "-" + datos.destino + ": Salón " + datos.salon + "</td>" +
        "</tr>" +

        "<tr>" +
        "<td>Numero de Pasaje: 123456789</td>" +
        "</tr>" +

        "<tr>" +
        "<td>Origen: " + datos.origen + "</td>" +
        "</tr>" +

        "<tr>" +
        "<td>Destino: " + datos.destino + "</td>" +
        "</tr>" +

        "<tr>" +
        "<td>Asiento: " + datos.asiento + "</td>" +
        "</tr>" +

        "<tr>" +
        "<td>Fecha: " + datos.fecha + "</td>" +
        "</tr>" +

        "<tr>" +
        "<td>Hora de Salida: " + datos.horaSalida + "</td>" +
        "</tr>" +

        "<tr>" +
        "<td>Paradero de Subida: " + datos.paradero.replace("+", " ") + "</td>" +
        "</tr>" +

        "<tr>" +
        "<td>Valor: $" + datos.valor + "</td>" +
        "</tr>" +

        "<tr>" +
        "<td>" +
        "<br>" +
        "*Pasaje valido para la fecha y hora señalada*</td>" +
        "</tr>" +

        "<tr>" +
        "<br>" + 
        "<th>-------------------------------------------------------------</th>" +
        "</tr>" +

        "<tr>" +
        "<td>Servicio: " + datos.origen + "-" + datos.destino + ": " + datos.horaSalida + "</td>" +
        "</tr>" +

        "<tr>" +
        "<td>Fecha: " + datos.fecha + "</td>" +
        "</tr>" +

        "<tr>" +
        "<td>Asiento: " + datos.asiento + "</td>" +
        "</tr>" +

        "<tr>" +
        "<td>Valor: $" + datos.valor + "</td>" +
        "</tr>");

    }
    else {
        $("#contenidoBoleto").append
        ("<tr>" +
        "<td>Servicio: " + datos.origen + "-" + datos.destino + ": Salón " + datos.salon + "</td>" +
        "</tr>" +

        "<tr>" +
        "<td>Numero de Pasaje: 123456789</td>" +
        "</tr>" +

        "<tr>" +
        "<td>Origen: " + datos.origen + "</td>" +
        "</tr>" +

        "<tr>" +
        "<td>Destino: " + datos.destino + "</td>" +
        "</tr>" +

        "<tr>" +
        "<td>Asiento: " + datos.asiento + "</td>" +
        "</tr>" +

        "<tr>" +
        "<td>Fecha: " + datos.fecha + "</td>" +
        "</tr>" +

        "<tr>" +
        "<td>Hora de Salida: " + datos.horaSalida + "</td>" +
        "</tr>" +

        "<tr>" +
        "<td>Paradero de Subida: " + datos.paradero + "</td>" +
        "</tr>" +

        "<tr>" +
        "<td>Valor: $" + datos.valor + "</td>" +
        "</tr>" +

        "<tr>" +
        "<td>Pasaje valido para la fecha y hora señalada</td>" +
        "</tr>" +

        "<tr>" +
        "<th>-------------------------------------------------------------</th>" +
        "</tr>" +

        "<tr>" +
        "<td>Servicio: " + datos.origen + "-" + datos.destino + ": " + datos.horaSalida + "</td>" +
        "</tr>" +

        "<tr>" +
        "<td>Fecha: " + datos.fecha + "</td>" +
        "</tr>" +

        "<tr>" +
        "<td>Asiento: " + datos.asiento + "</td>" +
        "</tr>" +

        "<tr>" +
        "<td>Valor: $" + datos.valor + "</td>" +
        "</tr>");
    }
});

function imprimir() {
    var ficha = document.getElementById("boleto");
    var ventimp = window.open("http://localhost:8080/ventaPasajes/boletoImpr.html", '_blank');
    ventimp.document.write(ficha.innerHTML);
    ventimp.document.close();
    ventimp.print();
    ventimp.close();

}
