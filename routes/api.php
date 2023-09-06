<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\stepscontroller;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\fileuploadcontroller;

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
 
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
//Get Airport data 
Route::get('/getairport' , [HomeController::class , 'getairport']);
// Auth
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
Route::get('/logout',[AuthController::class , 'logout']);
// step1
Route::post('/step1_ad' , [stepscontroller::class , 'step1_ad']);
Route::get('/step1_vw' , [stepscontroller::class , 'step1_vw']);
// step6
Route::post('/step6/register' , [AuthController::class , 'step6_reg']);
// FileUpload
Route::get('file-upload', [fileuploadcontroller::class, 'index']);
Route::post('store', [fileuploadcontroller::class, 'store']);