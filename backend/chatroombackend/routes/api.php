<?php

use App\Http\Controllers\userController;
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

Route::get('/v1/users', [userController::class, 'getAllUsers']);
Route::get('/v1/users/{id}', [userController::class, 'getUserById']);
Route::post('/v1/users', [userController::class, 'addUser']);
Route::put('/v1/users/{id}', [userController::class, 'modifyUserById']);

