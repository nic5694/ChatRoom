<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\messageController;
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

Route::get('/v1/users', [UserController::class, 'getAllUsers'])
    ->withoutMiddleware('throttle:api')
    ->middleware('throttle:500:1');
Route::get('/v1/users/{username}', [UserController::class, 'getUserByUserName']);
Route::post('/v1/users', [UserController::class, 'addNewUser']);
Route::put('/v1/users/{id}', [UserController::class, 'modifyUserById']);
Route::get('/v1/messages', [messageController::class, 'getAllMessages']);
Route::get('/v1/messages/last3seconds', [messageController::class, 'getMessagesInTheLast3Seconds'])//;
    ->withoutMiddleware('throttle:api')
    ->middleware('throttle:500:1');
Route::post('/v1/messages', [messageController::class, 'sendMessage']);
Route::get("/v1/users/{id}", [UserController::class, "findUserById"]);


