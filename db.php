<?php
$host = "localhost";
$user = "root";       // default user Laragon
$pass = "";           // default password Laragon kosong
$db   = "myself_portfolio"; // nama database kamu

$conn = new mysqli($host, $user, $pass, $db);

// Cek koneksi
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
?>
