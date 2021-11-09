<?php

namespace App\Http\Controllers\Auth;

use App\Abstractions\Http\Controllers\BaseController;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;

class RegisterController extends BaseController
{
    /**
     * @return Factory|View|Application
     */
    public function get(): Factory|View|Application
    {
        return view('pages.auth.register');
    }
}
