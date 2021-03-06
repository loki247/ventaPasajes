﻿<!DOCTYPE html>
<html>
<head>

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Sistema de Venta de Pasajes</title>
    <link rel="icon" href="img/favicon.PNG" type="image/x-icon"/>
    <link rel="stylesheet" type="text/css" href="css/bulma.css" />
    <link rel="stylesheet" type="text/css" href="css/estilo.css" />
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script src="js/registroServicios.js"></script>

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

                <div class="nav-right nav-menu">

                    <a class="nav-item is-tab" href="index.php">Inicio</a>

                    <a class="nav-item is-tab" href="ventaPasajes.php">Venta Pasajes</a>

                    <ul id="nav">
                        <li><a href="#s1" class="nav-item is-tab is-active">Menu Servicios</a>
                            <span id="s1"></span>
                            <ul class="subs">
                                <li>
                                    <ul>
                                        <li><a class="nav-item is-tab is-active" href="registro_servicios.php">Registrar Servicios</a></li>
                                        <li><a class="nav-item is-tab" href="eliminar_servicios.php">Eliminar Servicios</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <a href="editarUsuario.php"><?php echo "<b>". $_SESSION['usuario'] ."-" . $_SESSION['rut'] . "</b>"; ?></a>
                    <a href="logout.php" class="nav-item is-tab">Cerrar Sesión</a>

                </div>

            </div>

        </nav>

        <form action="rest/registro_servicios.php" method="get" id="formServicio">
            <div class="columns">

                <div class="column"></div>

                <div class="column is-2">
                    <script>
                        $(function () {
                            $("#datepicker").datepicker({
                                dateFormat: "dd-mm-yy",
                                firstDay: 1,
                                showAnim: "slideDown",
                                monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
                                dayNames: ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"],
                                dayNamesMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"]
                            });
                        });
                    </script>

                    <label class="label">Fecha</label>
                    <p class="control">
                        <input type="text" id="datepicker" class="input" readonly="readonly" name="f">
                    </p>

                    <label class="label">Hora de Salida</label>
                    <p class="control">
                        <input type="time" class="input" id="horaSalida" name="s">
                    </p>


                    <label class="label">Hora de Llegada</label>
                    <p class="control">
                        <input type="time" class="input" id="horaLlegada" name="l">
                    </p>


                    <label class="label">Bus</label>
                    <p class="control">
                        <span class="select">
                            <select id="opcBus" name="b"></select>
                        </span>
                    </p>

                    <label class="label">Origen</label>
                    <p class="control">
                        <span class="select">
                            <select id="opcOrigen" name="o"></select>
                        </span>
                    </p>

                    <label class="label">Destino</label>
                    <p class="control">
                        <span class="select">
                            <select id="opcDestino" name="d"></select>
                        </span>
                    </p>


                    <label class="label">Valor</label>
                    <p class="control">
                        <input type="text" id="valor" class="input" name="v">
                    </p>

                    <input type="submit" value="Registrar" class="button is-primary" />

                </div>

                <div class="column"></div>
            </div>
            
        </form>
    </div>

</body>
</html>