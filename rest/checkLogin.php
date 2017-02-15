<!DOCTYPE html>
<html>
<head>
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
session_start();
?>

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

$rut = $_POST['rut'];
$password = $_POST['pass'];

echo $rut . ", " . $password;
$sql = "SELECT * FROM usuario WHERE rut =''" . $rut. "and password= '" . $password . "'";

$result = $conn->query($sql);


if ($result->num_rows > 0) {
}
$row = $result->fetch_array(MYSQLI_ASSOC);
if (password_verify($password, $row['password'])) {

    $_SESSION['loggedin'] = true;
    $_SESSION['username'] = $username;
    $_SESSION['start'] = time();
    $_SESSION['expire'] = $_SESSION['start'] + (5 * 60);

    echo "Bienvenido! " . $_SESSION['username'];
    echo "<br><br><a href=index.html>Panel de Control</a>";

} else {
    echo "Username o Password estan incorrectos.";

    echo "<br><a href='login.html'>Volver a Intentarlo</a>";
}
mysqli_close($conexion);
?>