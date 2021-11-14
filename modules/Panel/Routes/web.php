<?php

use Illuminate\Support\Facades\Route;
use Modules\Panel\Http\Controllers\OverviewController;

Route::group(['prefix' => 'panel', 'middleware' => 'auth:web', 'as' => 'panel.'], function () {
    Route::get('/', [OverviewController::class, 'index'])->name('overview');
});
