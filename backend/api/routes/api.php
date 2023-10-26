<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', 'App\Http\Controllers\AuthController@register');
Route::post('/login', 'App\Http\Controllers\AuthController@login');

Route::get('/hello', function () {
//    $data = [];
//
//    \Illuminate\Support\Facades\Mail::send('emails.es', $data, function($message){
//        $message->to('mpjsp100@gmail.com', 'Test')->subject('This is a test mail');
//    });

    return 'Hello Next.js, from Laravel API1111';
});
