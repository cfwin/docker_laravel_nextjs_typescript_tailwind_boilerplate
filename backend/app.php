<?php

/**
 * Laravel - A PHP Framework For Web Artisans
 *
 * @package  Laravel
 * @author   Taylor Otwell <taylor@laravel.com>
 */

$uri = urldecode(
    parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH) ?? ''
);

if (preg_match('/\/([a-z]+)\/([a-zA-Z0-9]+)\/([a-zA-Z0-9]+)$/', $uri, $matches)) {
    $value1 = $matches[1];
    $value2 = $matches[2];
    $value3 = $matches[3];

    if ($value1 === 'api' && $value2 === 'job' && file_exists('static/job/'.$value3.'.json')){

        $allowedOrigins = array(
            'http://example.com',
            'https://example.com',
            'http://localhost:8080',
            'http://localhost:8300',
            'http://host.docker.internal:8080',
        );
        $origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : 'http://host.docker.internal:8080';
        if (in_array($origin, $allowedOrigins)) {
            header('Access-Control-Allow-Origin: ' . $origin);
            header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
            header('Access-Control-Allow-Headers: Content-Type');
            header('Access-Control-Allow-Credentials: true');
            header('Content-Type:text/json;charset=utf-8');
            echo file_get_contents('static/job/'.$value3.'.json');
            exit;
        } else {
            header('HTTP/1.0 403 Forbidden');
            echo "Access denied.";
            exit;
        }
    }
}

// This file allows us to emulate Apache's "mod_rewrite" functionality from the
// built-in PHP web server. This provides a convenient way to test a Laravel
// application without having installed a "real" web server software here.
if ($uri !== '/' && file_exists(__DIR__.'/api/public'.$uri)) {
    return false;
}

require_once __DIR__.'/api/public/index.php';
