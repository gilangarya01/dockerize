<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Edit Item</title>
</head>
<body>
    <h1>Edit Item</h1>
    <form action="/item/update/<?= $item['id'] ?>" method="POST">
        <input type="text" name="name" value="<?= htmlspecialchars($item['name']) ?>" required><br>
        <textarea name="description" required><?= htmlspecialchars($item['description']) ?></textarea><br>
        <button type="submit">Update</button>
    </form>
    <a href="/item">Back to home</a>
</body>
</html>