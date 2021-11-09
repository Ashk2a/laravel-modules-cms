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
     * @param Verification $verification
     * @param AuthService $authService
     * @return RedirectResponse
     */
    public function get(Verification $verification, AuthService $authService): RedirectResponse
    {
        try {
            $authService->verify($verification);

            $this->flashNowInfo(trans('toast.info.user_has_been_verified'));
        } catch (UserAlreadyVerifiedException $e) {
            $this->flashNowWarning(trans('toast.warning.user_already_verified'));
        }

        return redirect()->route('auth.login');
    }
}
