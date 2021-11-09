<?php

namespace App\Http\Controllers\Auth;

use App\Abstractions\Http\Controllers\BaseController;
use App\Models\Reminder;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;

class ResetPasswordController extends BaseController
{
    /**
     * @param Reminder $reminder
     * @return Factory|View|Application
     */
    public function get(Reminder $reminder): Factory|View|Application
    {
        return view('pages.auth.reset-password', ['reminder' => $reminder]);
    }
}
