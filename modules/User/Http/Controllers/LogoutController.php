<?php

namespace Modules\User\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Modules\Core\Http\Controllers\AbstractController;

class LogoutController extends AbstractController
{
    /**
     * @return RedirectResponse
     */
    public function get(): RedirectResponse
    {
        Auth::logout();

        $this->flashNowInfo(trans('user::text.goodbye'));

        return redirect()->route('home');
    }
}
