<?php

namespace Modules\User\Http\Controllers;

use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Modules\User\Models\Reminder;
use Modules\Core\Http\Controllers\AbstractController;

class ResetPasswordController extends AbstractController
{
    /**
     * @param Reminder $reminder
     * @return Factory|View|Application
     */
    public function get(Reminder $reminder): Factory|View|Application
    {
        return view('user::pages.reset-password', ['reminder' => $reminder]);
    }
}
