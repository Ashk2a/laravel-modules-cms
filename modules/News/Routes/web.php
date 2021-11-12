<?php

use Illuminate\Support\Facades\Route;
use Modules\News\Http\Controllers\NewsController;

Route::resource('news', NewsController::class, ['only' => ['index', 'show']]);
/*Route::get('news', [NewsController::class, 'index']);*/
