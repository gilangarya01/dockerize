<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Create Item</title>
</head>
<body>
    <h1>Create Item</h1>
    <form action="/item/store" method="POST">
        <input type="text" name="name" placeholder="Name" required><br>
        <textarea name="description" placeholder="Description" required></textarea><br>
        <button type="submit">Create</button>
    </form>
    <a href="/item">Back to home</a>
</body>
</html>