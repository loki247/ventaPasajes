<!DOCTYPE html>
<html>
<head>

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Sistema de Venta de Pasajes</title>
    <link rel="stylesheet" type="text/css" href="css/bulma.css" />
    <link rel="stylesheet" type="text/css" href="css/estilo.css" />
    <link rel="stylesheet" type="text/css" href="css/calendario_estilo.css" />
    <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>

</head>
<body>
<?php
session_start();

if(empty($_SESSION['usuario'])) {
    header("Location: login.php");
    exit();
}
?>

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

        <script src="js/busCapacidad.js"></script>
        <form action="boleto.php" method="get" id="datosBoleto">
            <div id="datos"></div>
            <div id="servicio"></div>
            <div id="bus">
                <label class="label">Paradero de Subida</label>
                <p class="control">
                    <span class="select">
                        <select id="opcParadero" name="paradero" class="form-control"></select>
                    </span>
                </p>
                <p id="tipoSalon"></p>
                <table class="table table is-bordered" id="salon"></table>

                <p id="tipoSalon2"></p>
                <table class="table table is-bordered" id="salon2"></table>

                <input type="submit" value="Vender" class="button is-success is-outlined"/>
                <a href="javascript:window.history.back();" class="button is-danger is-outlined">Volver</a>
            </div>
        </form>
    </div>

</body>
</html>
