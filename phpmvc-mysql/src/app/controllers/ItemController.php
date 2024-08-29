<?php

class ItemController
{
    private $itemModel;

    public function __construct()
    {
        require_once 'app/models/ItemModel.php';
        $this->itemModel = new ItemModel();
    }

    public function index()
    {
        // Tampilkan daftar semua pengguna
        $items = $this->itemModel->getAll();
        require_once 'app/views/user/index.php';
    }

    public function create()
    {
        // Tampilkan halaman form tambah pengguna
        require_once 'app/views/user/create.php';
    }

    public function store()
    {
        // Proses penambahan pengguna ke database
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            $name = $_POST['name'];
            $description = $_POST['description'];

            $this->itemModel->add($name, $description);
            $this->redirect('/item');
        }
    }

    public function edit($id)
    {
        // Tampilkan halaman form edit pengguna
        $item = $this->itemModel->getById($id);
        require_once 'app/views/user/edit.php';
    }

    public function update($id)
    {
        // Proses pembaruan data pengguna di database
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            $name = $_POST['name'];
            $description = $_POST['description'];

            $this->itemModel->update($id, $name, $description);
            // Redirect atau tampilkan pesan sukses
            $this->redirect('/item');
        }
    }

    public function delete($id)
    {
        // Proses penghapusan pengguna dari database
        $this->itemModel->delete($id);
        // Redirect atau tampilkan pesan sukses
        $this->redirect('/item');
    }

    private function redirect($url)
    {
        header('Location: ' . BASE_URL . $url);
        exit;
    }

}

?>