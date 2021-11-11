<?php

namespace Modules\Auth\Http\Controllers;

use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Modules\Auth\Models\Reminder;
use Modules\Core\Http\Controllers\AbstractController;

class ResetPasswordController extends AbstractController
{
    /**
     * @param Reminder $reminder
     * @return Factory|View|Application
     */
    public function get(Reminder $reminder): Factory|View|Application
    {
        return view('auth::pages.reset-password', ['reminder' => $reminder]);
    }
}
