<?php

namespace Modules\Core\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Illuminate\Http\Request;
use Modules\Core\Http\Concerns\HasFlashToast;

class Authenticate extends Middleware
{
    use HasFlashToast;

    /**
     * @param Request $request
     * @return string|null
     */
    protected function redirectTo($request): ?string
    {
        if (!$request->expectsJson()) {
            $this->flashNextDanger(trans('auth::text.not_allow'));

            return route('auth.login');
        }

        return null;
    }
}
