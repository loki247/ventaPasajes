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

$origenId = $_GET["o"];
$destinoId = $_GET["d"];
$fecha =  $_GET["f"];
$sql = "CALL get_servicios_origenDestino(".$origenId.", ".$destinoId.", '".$fecha."')";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    $arrayJson = array();
    $i = 0;
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
        
        $arrayJson[$i]= $row;
        $i++;
    }
} else {
    echo "0 results";
}

mysqli_close($conn);
echo json_encode($arrayJson);
return json_encode($arrayJson);
?> 