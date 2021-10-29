<?php

namespace App\Http\Controllers\Auth;

use App\Abstractions\Http\Controllers\BaseController;
use App\Exceptions\Auth\UserNotVerifiedException;
use App\Http\Requests\Auth\LoginRequest;
use App\Services\AuthService;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;

class LoginController extends BaseController
{
    /**
     * @return Factory|View|Application
     */
    public function get(): Factory|View|Application
    {
        return view('pages.auth.login');
    }

    /**
     * @param LoginRequest $request
     * @param AuthService $authService
     * @return RedirectResponse
     */
    public function post(LoginRequest $request, AuthService $authService): RedirectResponse
    {
        try {
            $user = $authService->login(
                $request->get('email'),
                $request->get('password'),
                $request->get('remember_me', false)
            );
        } catch (UserNotVerifiedException) {
            $this->flashDanger(
                trans('toast.warning.user_not_verified'),
                trans('toast.title.authentication_failed')
            );

            return redirect()->route('auth.login');
        }

        // Authentication just fail cause credentials were wrong
        if (null === $user) {
            $this->flashDanger(
                trans('toast.danger.wrong_credentials'),
                trans('toast.title.authentication_failed')
            );

            return redirect()->route('auth.login');
        }

        $this->flashInfo(
            trans('toast.info.welcome_back', ['nickname' => $user->nickname]),
            trans('toast.title.authenticated')
        );

        return redirect()->route('home');
    }
}
