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

                <a class="nav-item is-tab" href="ventaPasajes.php">Venta Pasajes</a>

                <ul id="nav">
                    <li><a href="#s1" class="nav-item is-tab is-active">Menu Servicios</a>
                        <span id="s1"></span>
                        <ul class="subs">
                            <li>
                                <ul>
                                    <li><a class="nav-item is-tab" href="registro_servicios.php">Registrar Servicios</a></li>
                                    <li><a class="nav-item is-tab is-active" href="eliminar_servicios.php">Eliminar Servicios</a></li>
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


        <div class="columns">

            <script>
                $(function () {
                    $("#datepicker").datepicker({
                        dateFormat: "yy-mm-dd",
                        firstDay: 1,
                        showAnim: "slideDown",
                        monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
                        dayNames: ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"],
                        dayNamesMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"]
                    });
                });
            </script>

            <div class="column is-2" style="margin-left: 20px; margin-top: 20px; ">
                <form action="#servicios">

                    <label class="label">Fecha</label>
                    <p class="control">
                        <input type="text" id="datepicker" class="input" readonly="readonly">
                    </p>
                    <input type="submit" value="Buscar" class="button" id="btnBuscar"/>
                </form>
            </div>

            <script src="js/servicios_fecha.js"></script>

            <div class="column is-8 table is-bordered table is-striped" id="servicios" style="margin-top: 30px; margin-left: 20px;">
                <table id="resultados"></table>
            </div>

        </div>

</div>

</body>
</html>