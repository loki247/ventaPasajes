<?php
require ("rest/conector.php");

$rut= $_POST["rut"];
$password= $_POST["clave"];

if(empty($rut) || empty($password)){
    header("Location: login.php");
    exit();
}

$sql = "SELECT * FROM usuario WHERE rut= '". $rut ."'";
$result = mysqli_query($conn, $sql);

if ($row = mysqli_fetch_array($result)){
    if($row['clave']== $password){
        session_start();
        $_SESSION['usuario'] = $row['nombre']." ". $row['apellido_paterno'];
        $_SESSION['idusuario'] = $row['idusuario'];
        $_SESSION['rut'] = $row['rut'];
        $_SESSION['nombre'] = $row['nombre'];
        $_SESSION['apellido_paterno'] = $row['apellido_paterno'];
        $_SESSION['apellido_materno'] = $row['apellido_materno'];
        $_SESSION['telefono'] = $row['telefono'];
        $_SESSION['email'] = $row['email'];
        $_SESSION['direccion'] = $row['direccion'];
        $_SESSION['clave'] = $row['clave'];
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
