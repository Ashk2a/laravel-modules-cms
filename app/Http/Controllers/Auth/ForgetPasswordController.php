<?php

namespace App\Http\Controllers\Auth;

use App\Abstractions\Http\Controllers\BaseController;
use App\Http\Requests\Auth\ForgetPasswordRequest;
use App\Models\Reminder;
use App\Services\AuthService;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;

class ForgetPasswordController extends BaseController
{
    /**
     * @return Factory|View|Application
     */
    public function get(): Factory|View|Application
    {
        return view('pages.auth.forget-password');
    }

    /**
     * @param ForgetPasswordRequest $request
     * @param AuthService $authService
     * @return RedirectResponse
     */
    public function post(ForgetPasswordRequest $request, AuthService $authService): RedirectResponse
    {
        $authService->forget($request->get('email'));

        $this->flashInfo(trans('toast.info.forget_password_procedure_sent'));

        return redirect()->route('auth.login');
    }
}
