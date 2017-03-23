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
                                    <li><a class="nav-item is-tab is-active" href="registro_servicios.php">Registrar Servicios</a></li>
                                    <li><a class="nav-item is-tab" href="eliminar_servicios.php">Eliminar Servicios</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>

                <?php echo "<b>". $_SESSION['usuario'] . "</b>"; ?>
                <a href="logout.php" class="nav-item is-tab">Cerrar Sesión</a>

            </div>

        </div>

    </nav>

    <form action="#" method="get" id="formServicio">
        <div class="columns">

            <div class="column"></div>

            <div class="column is-2">

                <label class="label">RUT:</label>
                 <p class="control">
                    <input type="text" class="input" name="rut">
                </p>

                <label class="label">Nombre:</label>
                <p class="control">
                    <input type="text" class="input" name="nombre">
                </p>

                <label class="label">Apellido Paterno:</label>
                <p class="control">
                    <input type="text" class="input" name="aPaterno">
                </p>

                <label class="label">Apellido Materno:</label>
                <p class="control">
                    <input type="text" class="input" name="aMatenro">
                </p>

                <label class="label">Teléfono:</label>
                <p class="control">
                    <input type="text" class="input" name="telefono">
                </p>

                <label class="label">E-Mail:</label>
                <p class="control">
                    <input type="text" class="input" name="email">
                </p>

                <label class="label">Dirección:</label>
                <p class="control">
                    <input type="text" class="input" name="direccion">
                </p>

                <label class="label">Contraseña</label>
                <p class="control">
                    <input type="password" class="input" name="password">
                </p>
                <input type="submit" value="Guardar" class="button is-primary" />

            </div>

            <div class="column"></div>
        </div>

    </form>
</div>

</body>
</html>