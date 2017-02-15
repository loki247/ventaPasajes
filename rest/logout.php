<?php

session_start();
unset ($SESSION['rut']);
session_destroy();

header('Location: login.html');