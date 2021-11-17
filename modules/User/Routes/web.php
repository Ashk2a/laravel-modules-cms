<?php

use Illuminate\Support\Facades\Route;
use Modules\User\Http\Controllers\ForgetPasswordController;
use Modules\User\Http\Controllers\LoginController;
use Modules\User\Http\Controllers\LogoutController;
use Modules\User\Http\Controllers\RegisterController;
use Modules\User\Http\Controllers\ResetPasswordController;
use Modules\User\Http\Controllers\VerificationController;

Route::group(['middleware' => 'guest'], function () {
    /*--------------------------------------------------------------------------
    | Auth
    |--------------------------------------------------------------------------*/
    Route::get('login', [LoginController::class, 'get'])->name('auth.login');
    Route::get('register', [RegisterController::class, 'get'])->name('auth.register');
    Route::get('verify/{verification:token}', [VerificationController::class, 'get'])->name('auth.verify');
    Route::get('forget', [ForgetPasswordController::class, 'get'])->name('auth.forget');
    Route::get('reset/{reminder:token}', [ResetPasswordController::class, 'get'])->name('auth.reset');
});

Route::group(['middleware' => 'auth'], function () {
    Route::get('logout', [LogoutController::class, 'get'])->name('auth.logout');
});
