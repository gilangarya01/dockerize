<?php

$uri = trim(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), '/');
$uriParts = explode('/', $uri);

$controllerName = !empty($uriParts[0]) ? ucfirst($uriParts[0]) . 'Controller' : 'ItemController';
$methodName = !empty($uriParts[1]) ? $uriParts[1] : 'index';
$id = $uriParts[2] ?? null;

require_once "../app/controllers/$controllerName.php";
$controller = new $controllerName;

if ($id) {
    $controller->$methodName($id);
} else {
    $controller->$methodName();
}
