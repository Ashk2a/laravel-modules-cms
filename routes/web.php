<?php

use App\Http\Controllers\NewsController;
use App\Http\Controllers\Auth\ForgetPasswordController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\ResetPasswordController;
use App\Http\Controllers\Auth\VerificationController;
use App\Http\Controllers\HomeController;
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
        | Verify
        |--------------------------------------------------------------------------*/
        Route::get('auth/verify/{verification:token}', [VerificationController::class, 'get'])->name('auth.verify');

        /*--------------------------------------------------------------------------
        | Forget password
        |--------------------------------------------------------------------------*/
        Route::get('auth/forget', [ForgetPasswordController::class, 'get'])->name('auth.forget');
        Route::post('auth/forget', [ForgetPasswordController::class, 'post']);

        /*--------------------------------------------------------------------------
        | Reset password
        |--------------------------------------------------------------------------*/
        Route::get('auth/reset/{reminder:token}', [ResetPasswordController::class, 'get'])->name('auth.reset');
        Route::post('auth/reset/{reminder:token}', [ResetPasswordController::class, 'post']);
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
});
