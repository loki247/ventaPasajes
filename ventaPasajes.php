﻿<!DOCTYPE html>
<html>
<head>

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Sistema de Venta de Pasajes</title>
    <link rel="icon" href="img/favicon.PNG" type="image/x-icon"/>
    <link rel="stylesheet" type="text/css" href="css/bulma.css" />
    <link rel="stylesheet" type="text/css" href="css/base.css" />
    <link rel="stylesheet" type="text/css" href="css/estilo.css" />
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

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

                    <a class="nav-item is-tab is-active" href="ventaPasajes.php">Venta Pasajes</a>

                    <ul id="nav">
                        <li><a href="#s1" class="nav-item is-tab">Menu Servicios</a>
                            <span id="s1"></span>
                            <ul class="subs">
                                <li>
                                    <ul>
                                        <li><a class="nav-item is-tab" href="registro_servicios.php">Registrar Servicios</a></li>
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

        <div id="formularioCiudades">

            <script>
                $( function() {
                    $("#datepicker").datepicker({
                        dateFormat: "yy-mm-dd",
                        firstDay: 1,
                        showAnim: "slideDown",
                        monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
                        dayNames: ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"],
                        dayNamesMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"]
                    });
                } );
            </script>


            <form action="#resultadosServicios">
                <div class="columns" id="#formularioCiudades">

                    <div class="column"></div>

                    <div class="column is-6">
                        <ul>
                            <li>
                                <label class="label">Origen</label>
                                <p class="control">
                                    <span class="select">
                                        <select id="opcOrigen" class="form-control">
                                            <option value="">SELECCIONAR</option>
                                        </select>
                                    </span>
                                </p>
                            </li>

                            <li>
                                <label class="label">Destino</label>
                                <p class="control">
                                    <span class="select">
                                        <select id="opcDestino" class="form-control">
                                            <option value="">SELECCIONAR</option>
                                        </select>
                                    </span>
                                </p>
                            </li>

                            <li>
                                <label class="label">Fecha</label>
                                <p class="control">
                                    <input type="text" id="datepicker" class="input" readonly="readonly">
                                </p>
                            </li>

                            <li>
                                <input type="submit" value="Buscar" class="button" id="btnBuscar" style="margin-top:28px;"/>
                            </li>
                        </ul>
                       
                    </div>

                    <div class="column"></div>

                </div>
            </form>
        </div>

        <script src="js/venta.js"></script>

        <div class="table table is-bordered table is-striped " id="resultadosServicios">
            <table id="resultados"></table>
        </div>

    </div>

</body>
</html>
