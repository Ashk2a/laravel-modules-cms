<?php

use Illuminate\Support\Facades\Route;
use Modules\Panel\Http\Controllers\OverviewController;
use Modules\Panel\Http\Controllers\PreferenceController;

Route::group(['prefix' => 'panel', 'middleware' => 'auth:web', 'as' => 'panel.'], function () {
    Route::get('/', [OverviewController::class, 'index'])->name('overview');
    Route::get('/preferences', [PreferenceController::class, 'index'])->name('preferences');
});
