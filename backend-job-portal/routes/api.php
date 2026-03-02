<?php

use App\Http\Controllers\Api\ApplicationController;
use App\Http\Controllers\Api\JobController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('users', function () {
    $user = User::get();
    return $user;
});


Route::get('/jobs', [JobController::class, 'index']);
Route::get('/jobs/{id}', [JobController::class, 'show']);
Route::apiResource('applications', ApplicationController::class);

Route::middleware(['auth:sanctum', 'admin'])->group(function () {
    Route::post('/jobs', [JobController::class, 'store']);
    Route::delete('/jobs/{id}', [JobController::class, 'destroy']);
});
