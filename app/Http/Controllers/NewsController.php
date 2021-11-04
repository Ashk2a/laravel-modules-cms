<?php

namespace App\Http\Controllers;

use App\Abstractions\Http\Controllers\BaseController;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;

class NewsController extends BaseController
{
    public function index(): Factory|View|Application
    {
        return view('pages.news.index');
    }

    public function show(): Factory|View|Application
    {
        return view('pages.news.show');
    }
}
