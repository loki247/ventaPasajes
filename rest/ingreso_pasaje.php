<!DOCTYPE html>
<html>
<head>
    <META HTTP-EQUIV="Refresh" CONTENT="0; URL=../ventaPasajes.html">
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

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ventapasajes";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$idServicio = $_GET["idServicio"];
$asiento = $_GET["asiento"];
$idSalon = $_GET["idSalon"];

$sql = "CALL ingreso_pasaje(" .$idServicio. ", " .$asiento. ", " .$idSalon. ")";

if (mysqli_query($conn, $sql)) {
    echo "<h1>Registro exitoso</h1>";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>