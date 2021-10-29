<?php

namespace App\Http\Controllers\Auth;

use App\Abstractions\Http\Controllers\BaseController;
use App\Exceptions\Auth\UserAlreadyVerifiedException;
use App\Models\Verification;
use App\Services\AuthService;
use Illuminate\Http\RedirectResponse;

class VerificationController extends BaseController
{
    /**
     * @param AuthService $authService
     */
    public function __construct(private AuthService $authService)
    {
    }

    /**
     * @param Verification $verification
     * @return RedirectResponse
     */
    public function get(Verification $verification): RedirectResponse
    {
        try {
            $this->authService->verify($verification);

            $this->flashInfo(trans('toast.info.user_has_been_verified'));
        } catch (UserAlreadyVerifiedException $e) {
            $this->flashWarning(trans('toast.warning.user_already_verified'));
        }

        return redirect()->route('auth.login');
    }
}
