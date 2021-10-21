<?php

namespace App\Http\Controllers\Auth;

use App\Abstractions\Http\Controllers\BaseController;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;

class LoginController extends BaseController
{
    public function get(): Factory|View|Application
    {
        return view('pages.auth.login');
    }

    public function post() {
        dd('post');
    }
}
