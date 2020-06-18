<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('expositions', 'ExpositionsController@index');
 
Route::get('expositions/{exposition}', 'ExpositionsController@show');

// Route::post('sendMail','MailController@send');

Route::post("sendMail", "MailController@send");
  