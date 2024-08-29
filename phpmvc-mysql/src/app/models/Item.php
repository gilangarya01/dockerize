<?php

class Item extends Model
{
    public function getAll()
    {
        $stmt = $this->db->query("SELECT * FROM items");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getById($id)
    {
        $stmt = $this->db->prepare("SELECT * FROM items WHERE id = ?");
        $stmt->execute([$id]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function create($data)
    {
        $stmt = $this->db->prepare("INSERT INTO items (name, description) VALUES (?, ?)");
        return $stmt->execute([$data['name'], $data['description']]);
    }

    public function update($id, $data)
    {
        $stmt = $this->db->prepare("UPDATE items SET name = ?, description = ? WHERE id = ?");
        return $stmt->execute([$data['name'], $data['description'], $id]);
    }

    public function delete($id)
    {
        $stmt = $this->db->prepare("DELETE FROM items WHERE id = ?");
        return $stmt->execute([$id]);
    }
}
