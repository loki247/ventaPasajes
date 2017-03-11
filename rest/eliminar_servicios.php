<!DOCTYPE html>
<html>
<head>
    <META HTTP-EQUIV="Refresh" CONTENT="0; URL=../eliminar_servicios.html">
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

$idServicio = $_GET['s'];

$sql = "CALL eliminar_servicio(".$idServicio.")";

if (mysqli_query($conn, $sql)) {
    echo "<h1>Registro eliminado</h1>";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>