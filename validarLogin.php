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
        $_SESSION['nombre'] = $row['nombre'];
        $_SESSION['apellidoPaterno'] = $row['apellidoPaterno'];
        $_SESSION['apellidoMaterno'] = $row['apellidoMaterno'];
        $_SESSION['telefono'] = $row['telefono'];
        $_SESSION['email'] = $row['email'];
        $_SESSION['direccion'] = $row['direccion'];
        $_SESSION['password'] = $row['password'];
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
