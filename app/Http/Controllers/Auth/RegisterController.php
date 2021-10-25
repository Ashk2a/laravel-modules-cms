<?php

namespace App\Http\Controllers\Auth;

use App\Abstractions\Http\Controllers\BaseController;
use App\Contracts\Hashing\WotlkHasher;
use App\Contracts\Services\User\UserRegisterService;
use App\Http\Requests\Auth\RegisterRequest;
use App\Models\Auth\Account;
use App\Models\User;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

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
     * @param WotlkHasher $wotlkHasher
     * @return RedirectResponse
     */
    public function post(RegisterRequest $request, UserRegisterService $userRegisterService): RedirectResponse
    {
        $user = $userRegisterService->register(
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
