<?php

class App
{
    protected $controllerName = 'HomeController';
    protected $methodName = 'index';
    protected $id = [];

    public function __construct()
    {
        $uri = trim(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), '/');
        $uriParts = explode('/', $uri);

        $controllerName = !empty($uriParts[0]) ? ucfirst($uriParts[0]) . 'Controller' : 'HomeController';
        $methodName = !empty($uriParts[1]) ? $uriParts[1] : 'index';
        $id = $uriParts[2] ?? null;

        $controllerPath = "app/controllers/$controllerName.php";

        // Cek apakah file controller ada
        if (file_exists($controllerPath)) {
            require_once $controllerPath;
            $controller = new $controllerName;

            // Cek apakah method ada di dalam controller
            if (method_exists($controller, $methodName)) {
                if ($id) {
                    $controller->$methodName($id);
                } else {
                    $controller->$methodName();
                }
            } else {
                $this->show404();
            }
        } else {
            $this->show404();
        }
    }

    private function show404()
    {
        http_response_code(404);
        require_once 'app/views/404.html';
    }
}