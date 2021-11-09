<?php

use App\Http\Controllers\Auth\ForgetPasswordController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\ResetPasswordController;
use App\Http\Controllers\Auth\VerificationController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Manager\DashboardController;
use App\Http\Controllers\NewsController;
use Illuminate\Support\Facades\Route;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;

Route::group(['prefix' => LaravelLocalization::setLocale(), 'middleware' => ['localeSessionRedirect', 'localizationRedirect', 'localeViewPath']], function () {
    Route::get('demo', function () {
        return view('pages.demo');
    });

    /*--------------------------------------------------------------------------
    | Home
    |--------------------------------------------------------------------------*/
    Route::get('/', [HomeController::class, 'get'])->name('home');

    /*--------------------------------------------------------------------------
    | News
    |--------------------------------------------------------------------------*/
    Route::resource('news', NewsController::class, ['only' => ['index', 'show']]);

    /*--------------------------------------------------------------------------
    | Guest
    |--------------------------------------------------------------------------*/
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

    /*--------------------------------------------------------------------------
    | Authenticated
    |--------------------------------------------------------------------------*/
    Route::group(['middleware' => 'auth'], function () {
        /*--------------------------------------------------------------------------
        | Auth - logout
        |--------------------------------------------------------------------------*/
        Route::get('logout', [LogoutController::class, 'get'])->name('auth.logout');
    });

    /*--------------------------------------------------------------------------
    | Manager
    |--------------------------------------------------------------------------*/
    Route::group(['prefix' => 'manager'], function () {
        Route::get('/', [DashboardController::class, 'index'])->name('manager.index');
    });
});
