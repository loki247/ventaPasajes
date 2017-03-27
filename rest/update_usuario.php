<!DOCTYPE html>
<html>
<head>
    <META HTTP-EQUIV="Refresh" CONTENT="URL=../editarUsuario.php">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Sistema de Venta de Pasajes</title>
    <link rel="stylesheet" type="text/css" href="css/bulma.css" />
    <link rel="stylesheet" type="text/css" href="css/estilo.css" />
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
</div>
</body>
</html>
<?php

require ("conector.php");
$id= $_POST["id"];
$nombre= $_POST["nombre"];
$apellidoPaterno= $_POST["apellidoPaterno"];
$apellidoMaterno= $_POST["apellidoMaterno"];
$telefono= $_POST["telefono"];
$email= $_POST["email"];
$direccion= $_POST["direccion"];
$password= $_POST["password"];

//$sql= "CALL update_usuario('". $id ."', '". $nombre ."', '". $apellidoPaterno ."', '". $apellidoMaterno ."', '". $telefono ."', '". $email ."', '". $direccion ."', '". $password ."')";
$sql= "UPDATE usuario set nombre = '". $nombre ."', apellidoPaterno = '". $apellidoPaterno ."', apellidoMaterno = '". $apellidoMaterno ."', telefono = '". $telefono ."', email = '". $email ."', direccion = '". $direccion ."', password = '". $password ."' WHERE id = ". $id;

if ($conn->query($sql) === TRUE) {
    echo "Registro actualizado";
    echo $sql;
} else {
    echo "Error actualizando registro: " . $conn->error;
    echo $sql;
}