<?php

namespace App\Http\Controllers\Auth;

use App\Abstractions\Http\Controllers\BaseController;
use App\Http\Requests\Auth\ResetPasswordRequest;
use App\Models\Reminder;
use App\Services\AuthService;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;

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

    /**
     * @param ResetPasswordRequest $request
     * @param Reminder $reminder
     * @param AuthService $authService
     * @return RedirectResponse
     */
    public function post(ResetPasswordRequest $request, Reminder $reminder, AuthService $authService): RedirectResponse
    {
        $authService->reset($reminder, $request->get('new_password'));

        $this->flashSuccess(trans('toast.success.password_reset'));

        return redirect()->route('auth.login');
    }
}
