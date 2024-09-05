<?php
$servername = "db";
$username = "myuser";
$password = "mypassword";
$db = "mydatabase";
$conn = null;

try {
  $conn = new PDO("mysql:host=$servername;dbname=$db", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  echo "Connected successfully";
} catch (PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}

$query = "SELECT * FROM items";
$stmt = $conn->query($query);
$items = $stmt->fetchAll(PDO::FETCH_ASSOC);

?>

<ul>
  <?php foreach ($items as $item): ?>
    <li><?= $item['name'] ?></li>
  <?php endforeach ?>
</ul>