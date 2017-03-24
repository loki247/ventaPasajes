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
header('Content-Type: text/html; charset=utf-8');
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

                <a href="editarUsuario.php" class="nav-item is-tab is-active"><?php echo "<b>". $_SESSION['usuario'] . "</b>"; ?></a>
                <a href="logout.php" class="nav-item is-tab">Cerrar Sesión</a>

            </div>

        </div>

    </nav>

    <form action="#" method="post" id="formServicio">
        <div class="columns"  style="margin-top: 10px;">

            <div class="column">
            </div>

            <div class="column is-3">
                <h1 class="title">Editar Datos de usuario.</h1>

                <label class="label">RUT:</label>
                 <p class="control">
                    <input type="text" class="input" name="rut" value="<?php echo utf8_encode($_SESSION['rut']) ?>" disabled>
                </p>

                <label class="label">Nombre:</label>
                <p class="control">
                    <input type="text" class="input" name="nombre" value="<?php echo utf8_encode($_SESSION['nombre']) ?>">
                </p>

                <label class="label">Apellido Paterno:</label>
                <p class="control">
                    <input type="text" class="input" name="aPaterno" value="<?php echo utf8_encode($_SESSION['apellidoPaterno']) ?>">
                </p>

                <label class="label">Apellido Materno:</label>
                <p class="control">
                    <input type="text" class="input" name="aMaterno" value="<?php echo utf8_encode($_SESSION['apellidoMaterno']) ?>">
                </p>

                <label class="label">Teléfono:</label>
                <p class="control">
                    <input type="text" class="input" name="telefono" value="<?php echo utf8_encode($_SESSION['telefono']) ?>">
                </p>

                <label class="label">E-Mail:</label>
                <p class="control">
                    <input type="text" class="input" name="email" value="<?php echo utf8_encode($_SESSION['email']) ?>">
                </p>

                <label class="label">Dirección:</label>
                <p class="control">
                    <input type="text" class="input" name="direccion" value="<?php echo utf8_encode($_SESSION['direccion']) ?>">
                </p>

                <label class="label">Contraseña</label>
                <p class="control">
                    <input type="password" class="input" name="password" value="<?php echo utf8_encode($_SESSION['password']) ?>">
                </p>
                <input type="submit" value="Guardar" class="button is-primary" />

            </div>

            <div class="column"></div>
        </div>

    </form>
</div>

</body>
</html>