<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->get('/API/users','UserController@index');
$router->post('/API/users','UserController@store');
$router->get('/API/users/{id}','UserController@edit');
$router->put('/API/users/{id}','UserController@update');
