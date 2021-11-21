<?php

use Illuminate\Support\Facades\Route;
use Modules\Core\Http\Controllers\Manager\DashboardController;

Route::get('', [DashboardController::class, 'index'])->name('manager.dashboard');
