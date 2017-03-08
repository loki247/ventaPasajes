<!DOCTYPE html>
<html>
<head>

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Sistema de Venta de Pasajes</title>
    <link rel="icon" href="img/favicon.PNG" type="image/x-icon"/>
    <link rel="stylesheet" type="text/css" href="css/bulma.css" />
    <link rel="stylesheet" type="text/css" href="css/estilo.css" />
    <link rel="stylesheet" type="text/css" href="css/calendario_estilo.css" />
    <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
</head>
<body>

<div id="container">

<nav class="nav has-shadow" id="top">
    <div class="container">
        <div class="nav-left" id="barraSuperior">
            <p>Sistema de Venta de Pasajes</p>
        </div>
        <span class="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
        </span>
    </div>
</nav>

<div id="boleto" style="width: 50px; height: auto;">
    <script src="js/boleto.js"></script>

    <table id="contenidoBoleto" style="width: 50px; margin-left: 15px; font-size: 13pt;">
        <tr>
            <th>
                <img src="img/Logo_1.png" width="400" />
            </th>
        </tr>

    </table>

</div>


<form action="rest/ingreso_pasaje.php" method="get">
    <?php
        $idServicio = $_GET["idServicio"];
        $asiento = $_GET["asiento"];
        $idSalon = $_GET["idSalon"];

    echo "<input type='hidden' name='idServicio' value='".$idServicio."'>";
    echo "<input type='hidden' name='asiento' value='".$asiento."'>";
    echo "<input type='hidden' name='idSalon' value='".$idSalon."'>";
    ?>

    <input type="submit" class="button is-primary" onclick="imprimir();" value="Confirmar e Imprimir">
    <a href="javascript:window.history.back();" class="button is-danger">Volver</a>
</form>

</div>
</body>
</html>
