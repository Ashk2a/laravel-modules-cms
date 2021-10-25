<?php

namespace App\Http\Controllers\Auth;

use App\Abstractions\Http\Controllers\BaseController;
use App\Contracts\Services\AuthService;
use App\Http\Requests\Auth\LoginRequest;
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
        $user = $authService->login(
            $request->get('email'),
            $request->get('password'),
            $request->get('remember_me', false)
        );

        if (null === $user) {
            toast()
                ->danger(
                    trans('toast.danger.wrong_credentials'),
                    trans('toast.title.authentication_failed')
                )
                ->push();

            return redirect()->route('auth.login');
        }

        toast()
            ->info(
                trans('toast.info.welcome_back', ['nickname' => $user->nickname]),
                trans('toast.title.authenticated')
            )
            ->push();

        return redirect()->route('home');
    }
}
