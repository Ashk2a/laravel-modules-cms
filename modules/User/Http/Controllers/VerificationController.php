<?php

namespace Modules\User\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Modules\User\Exceptions\UserAlreadyVerifiedException;
use Modules\User\Models\Verification;
use Modules\User\Services\AuthService;
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

            $this->flashNowInfo(trans('user::text.user_has_been_verified'));
        } catch (UserAlreadyVerifiedException $e) {
            $this->flashNowWarning(trans('user::text.user_already_verified'));
        }

        return redirect()->route('auth.login');
    }
}
