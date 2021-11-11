<?php

namespace Modules\News\Http\Controllers;

use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Modules\Core\Http\Controllers\AbstractController;

class NewsController extends AbstractController
{
    public function index(): Factory|View|Application
    {
        return view('news::pages.index');
    }

    public function show(): Factory|View|Application
    {
        return view('news::pages.show');
    }
}
