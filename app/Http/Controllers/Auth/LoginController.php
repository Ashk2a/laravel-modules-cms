<?php

namespace App\Http\Controllers\Auth;

use App\Abstractions\Http\Controllers\BaseController;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;

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
     * @return RedirectResponse
     */
    public function post(LoginRequest $request): RedirectResponse
    {
        $rememberMe = $request->get('remember_me', false);

        $attempt = Auth::attempt($request->only(['email', 'password']), $rememberMe);

        if (false === $attempt) {
            toast()->danger(
                trans('toast.danger.wrong_credentials'),
                trans('toast.title.authentication_failed')
            );

            return redirect()->route('auth.login');
        }

        $user = Auth::user();

        toast()->info(
            trans('toast.info.welcome_back', ['nickname' => $user->nickname]),
            trans('toast.title.authenticated')
        );

        return redirect()->route('home');
    }
}
