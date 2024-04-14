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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('all_cyrpto',[App\Http\Controllers\CyrptoController::class, 'all_cyrpto'])->name('all_cyrpto');
Route::get('cyrpto_1_days',[App\Http\Controllers\CyrptoController::class, 'cyrpto_1_days'])->name('cyrpto_1_days');
Route::get('cyrpto_7_days',[App\Http\Controllers\CyrptoController::class, 'cyrpto_7_days'])->name('cyrpto_7_days');
Route::get('cyrpto_1_year',[App\Http\Controllers\CyrptoController::class, 'cyrpto_1_year'])->name('cyrpto_1_year');