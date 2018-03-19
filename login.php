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

<div class="columns">
    <div class="column"></div>

    <div class="column is-2" style="margin-top: 15px;">
        <?php
        session_start();
        if(!empty($_SESSION['usuario'])) {
            header("Location: index.php");
            exit();
        }
        ?>

        <form action="validarLogin.php" method="POST">

            <label class="label">RUT:</label>
            <input type="text" class="input" name="rut">
            <br>
            <br>
            <label class="label">Contraseña:</label>
            <input type="password" class="input" name="clave">
            <br>
            <br>
            <input type="submit" name="btnLogin" class="button" value="Entrar">

        </form>
    </div>

    <div class="column"></div>
</div>

</body>
</html>