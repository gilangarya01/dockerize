<?php

class ItemModel
{
    private $db;

    public function __construct()
    {
        $this->db = new Database();
    }

    public function getAll()
    {
        $query = "SELECT * FROM items";
        $stmt = $this->db->connect()->query($query);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getById($id)
    {
        $query = "SELECT * FROM items WHERE id = :id";
        $stmt = $this->db->connect()->prepare($query);
        $stmt->bindParam(':id', $id);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function add($name, $description)
    {
        $query = "INSERT INTO items (name, description) VALUES (:name, :description)";
        $stmt = $this->db->connect()->prepare($query);
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':description', $description);
        return $stmt->execute();
    }

    public function update($id, $name, $description)
    {
        $query = "UPDATE items SET name = :name, description = :description WHERE id = :id";
        $stmt = $this->db->connect()->prepare($query);
        $stmt->bindParam(':id', $id);
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':description', $description);
        return $stmt->execute();
    }

    public function delete($id)
    {
        $query = "DELETE FROM items WHERE id = :id";
        $stmt = $this->db->connect()->prepare($query);
        $stmt->bindParam(':id', $id);
        return $stmt->execute();
    }
}

?>