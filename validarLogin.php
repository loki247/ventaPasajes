<?php
require ("rest/conector.php");

$rut= $_POST["rut"];
$password= $_POST["password"];

if(empty($rut) || empty($password)){
    header("Location: login.php");
    exit();
}

$sql = "SELECT * FROM usuario WHERE rut= '". $rut ."'";
$result = mysqli_query($conn, $sql);

if ($row = mysqli_fetch_array($result)){
    if($row['password']== $password){
        session_start();
        $_SESSION['usuario'] = $row['nombre']." ". $row['apellidoPaterno'];
        $_SESSION['rut'] = $row['rut'];
        header("Location: index.php");
    }
    else{
        header("Location: login.php");
        exit();
    }
}
else{
    header("Location: login.php");
    exit();
}
