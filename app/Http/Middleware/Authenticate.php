<?php

namespace App\Http\Middleware;

use App\Abstractions\Http\HasFlashToast;
use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Illuminate\Http\Request;

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
            $this->flashWarning(
                trans('toast.warning.not_allow'),
                trans('toast.title.forbidden')
            );

            return route('auth.login');
        }

        return null;
    }
}
