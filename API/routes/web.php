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

use Illuminate\Support\Str;

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->get('/key',function(){
    return Str::random(32);
});

$router->post('/API/login','UserController@login');
$router->post('/API/reset','UserController@sendResetPassword');
$router->put('/API/reset/{token}','UserController@verifyResetPassword');

$router->group(['middleware' =>'auth'], function() use($router){
    $router->get('/API/users','UserController@index');
    $router->get('/API/users/{id}','UserController@edit');
    $router->post('/API/users','UserController@store');
    $router->put('/API/users/{id}','UserController@update');
    $router->delete('/API/users/{id}','UserController@destroy');  
    $router->get('/API/users/login','UserController@getUserLogin'); 
    
    $router->post('/API/logout','UserController@logout'); 
});


