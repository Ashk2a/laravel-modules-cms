<?php

namespace App\Http\Controllers\Auth;

use App\Abstractions\Http\Controllers\BaseController;
use App\Contracts\Services\AuthService;
use App\Http\Requests\Auth\RegisterRequest;
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
            toast()
                ->danger(
                    trans('toast.danger.cannot_create_account'),
                    trans('toast.title.registration_failed')
                )
                ->push();

            return redirect()->route('auth.register');
        }

        // TODO: send event to trigger email

        toast()
            ->success(
                trans('toast.success.verification_email_sent', ['email' => $user->email]),
                trans('toast.title.registration_succeed')
            )
            ->push();

        return redirect()->route('auth.login');
    }
}
