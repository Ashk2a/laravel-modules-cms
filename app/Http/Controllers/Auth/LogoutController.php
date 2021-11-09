<?php

namespace App\Http\Controllers\Auth;

use App\Abstractions\Http\Controllers\BaseController;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;

class LogoutController extends BaseController
{
    /**
     * @return RedirectResponse
     */
    public function get(): RedirectResponse
    {
        Auth::logout();

        $this->flashNowInfo(trans('toast.info.goodbye'));

        return redirect()->route('home');
    }
}
