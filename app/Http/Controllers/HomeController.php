<?php

namespace App\Http\Controllers;

use App\Abstractions\Http\Controllers\BaseController;
use App\Services\AuthService;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\Config;

class HomeController extends BaseController
{
    public function get(): Factory|View|Application
    {
        return view('pages.home');
    }
}
