<?php

namespace App\Http\Controllers\Auth;

use App\Abstractions\Http\Controllers\BaseController;
use App\Http\Requests\Auth\RegisterRequest;
use App\Services\AuthService;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;

class RegisterController extends BaseController
{
    /**
     * @return Factory|View|Application
     */
    public function get(): Factory|View|Application
    {
        return view('pages.auth.register');
    }

    /**
     * @param RegisterRequest $request
     * @param AuthService $registrationService
     * @return RedirectResponse
     */
    public function post(RegisterRequest $request, AuthService $registrationService): RedirectResponse
    {
        $user = $registrationService->register(
            $request->get('username'),
            $request->get('nickname'),
            $request->get('email'),
            $request->get('password')
        );

        // Internal error server
        if (null === $user) {
            $this->flashDanger(trans('toast.danger.cannot_create_account'));

            return redirect()->route('auth.register');
        }

        $this->flashSuccess(trans('toast.success.verification_email_sent', ['email' => $user->email]));

        return redirect()->route('auth.login');
    }
}
