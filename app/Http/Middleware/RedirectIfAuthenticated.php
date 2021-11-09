<?php

namespace App\Http\Middleware;

use App\Abstractions\Http\HasFlashToast;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;

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
        if (empty($guards)) {
            $guards[] = Config::get('auth.defaults.guard');
        }

        foreach (array_unique($guards) as $guard) {
            if (Auth::guard($guard)->check()) {
                $this->flashNowWarning(trans('toast.warning.not_allow'));

                return redirect()->route('home');
            }
        }

        return $next($request);
    }
}
