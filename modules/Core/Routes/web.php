<?php

use Illuminate\Support\Facades\Route;
use Modules\Core\Http\Controllers\HomeController;

Route::get('/', [HomeController::class, 'get'])->name('home');
