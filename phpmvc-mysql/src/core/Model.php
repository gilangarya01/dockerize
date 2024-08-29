<?php

class Model
{
    protected $db;

    public function __construct()
    {
        $config = require '../config/config.php';
        $this->db = new PDO('mysql:host=' . $config['host'] . ';dbname=' . $config['dbname'], $config['username'], $config['password']);
    }
}
