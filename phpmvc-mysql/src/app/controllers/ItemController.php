<?php

class ItemController extends Controller
{
    public function index()
    {
        $itemModel = $this->model('Item');
        $items = $itemModel->getAll();
        $this->view('items/index', ['items' => $items]);
    }

    public function create()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $itemModel = $this->model('Item');
            $itemModel->create($_POST);
            header('Location: /');
        } else {
            $this->view('items/create');
        }
    }

    public function edit($id)
    {
        $itemModel = $this->model('Item');
        $item = $itemModel->getById($id);

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $itemModel->update($id, $_POST);
            header('Location: /');
        } else {
            $this->view('items/edit', ['item' => $item]);
        }
    }

    public function delete($id)
    {
        $itemModel = $this->model('Item');
        $itemModel->delete($id);
        header('Location: /');
    }
}
