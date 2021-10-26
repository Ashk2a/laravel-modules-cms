<?php

namespace App\Http\Middleware;

use App\Abstractions\Http\HasFlashToast;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RedirectIfAuthenticated
{
    use HasFlashToast;

    /**
     * @param Request $request
     * @param Closure $next
     * @param string|null ...$guards
     * @return mixed
     */
    public function handle(Request $request, Closure $next, ...$guards): mixed
    {
        foreach ($guards as $guard) {
            if (Auth::guard($guard)->check()) {
                $this->flashWarning(
                    trans('toast.warning.not_allow'),
                    trans('toast.title.forbidden')
                );

                return redirect()->route('home');
            }
        }

        return $next($request);
    }
}
