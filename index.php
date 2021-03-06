<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Sistema de Venta de Pasajes</title>
    <link rel="icon" href="img/favicon.PNG" type="image/x-icon"/>
    <link rel="stylesheet" type="text/css" href="css/bulma.css" />
    <link rel="stylesheet" type="text/css" href="css/base.css" />
    <link rel="stylesheet" type="text/css" href="css/estilo.css" />

</head>
<body>

<?php
session_start();

if(empty($_SESSION['usuario'])) {
    header("Location: login.php");
    exit();
}

?>

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

            <a class="nav-item is-tab is-active" href="index.php">Inicio</a>

            <a class="nav-item is-tab" href="ventaPasajes.php">Venta Pasajes</a>

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
            <a href="editarUsuario.php"><?php echo "<b>". $_SESSION['usuario'] . "</b>"; ?></a>
            <a href="logout.php" class="nav-item is-tab">Cerrar Sesión</a>



        </div>

    </div>

</nav>

<div class="columns">
    <div class="column"></div>

    <div class="column">
        <img src="img/Logo_1.png" style="margin-top: 200px;"/>
    </div>

    <div class="column"></div>
</div>

</body>
</html>