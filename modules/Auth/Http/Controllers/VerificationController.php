<?php

namespace Modules\Auth\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Modules\Auth\Exceptions\UserAlreadyVerifiedException;
use Modules\Auth\Models\Verification;
use Modules\Auth\Services\AuthService;
use Modules\Core\Http\Controllers\AbstractController;

class VerificationController extends AbstractController
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

            $this->flashNowInfo(trans('auth::text.user_has_been_verified'));
        } catch (UserAlreadyVerifiedException $e) {
            $this->flashNowWarning(trans('auth::text.user_already_verified'));
        }

        return redirect()->route('auth.login');
    }
}
