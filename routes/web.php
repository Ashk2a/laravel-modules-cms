<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\VerificationController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

Route::get('demo', function() {
    return view('pages.demo');
});

/*--------------------------------------------------------------------------
| Home
|--------------------------------------------------------------------------*/
Route::get('/', [HomeController::class, 'get'])->name('home');

/*--------------------------------------------------------------------------
| Guest
|--------------------------------------------------------------------------*/
Route::group(['middleware' => 'guest'], function () {
    /*--------------------------------------------------------------------------
    | Login
    |--------------------------------------------------------------------------*/
    Route::get('auth/login', [LoginController::class, 'get'])->name('auth.login');
    Route::post('auth/login', [LoginController::class, 'post']);

    /*--------------------------------------------------------------------------
    | Register
    |--------------------------------------------------------------------------*/
    Route::get('auth/register', [RegisterController::class, 'get'])->name('auth.register');
    Route::post('auth/register', [RegisterController::class, 'post']);

    /*--------------------------------------------------------------------------
    | Verifications
    |--------------------------------------------------------------------------*/
    Route::get('auth/verifications/{verification:token}', [VerificationController::class, 'get'])->name('auth.verifications');
});

/*--------------------------------------------------------------------------
| Authenticated
|--------------------------------------------------------------------------*/
Route::group(['middleware' => 'auth'], function () {
    /*--------------------------------------------------------------------------
    | Logout
    |--------------------------------------------------------------------------*/
    Route::get('auth/logout', [LogoutController::class, 'get'])->name('auth.logout');
});
