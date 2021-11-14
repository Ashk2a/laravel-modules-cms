<?php

use Illuminate\Support\Facades\Route;

Route::get('ui', function () {
    return view('ui::pages.ui');
})->name('ui');
