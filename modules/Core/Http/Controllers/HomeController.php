<?php

namespace Modules\Core\Http\Controllers;

use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;

class HomeController extends AbstractController
{
    public function get(): Factory|View|Application
    {
        return view('core::pages.home');
    }
}
