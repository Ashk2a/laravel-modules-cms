<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class Localization
{
    protected const LOCALES = ['fr', 'en'];
    protected const SESSION_LOCALE_KEY = 'locale';

    /**
     * @param Request $request
     * @param Closure $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next): mixed
    {
        // Determine
        if (!session()->has(self::SESSION_LOCALE_KEY)) {
            session()->put(self::SESSION_LOCALE_KEY, $request->getPreferredLanguage(self::LOCALES));
        }

        // Specified in request directly
        if ($request->has('lang')) {
            $lang = $request->get('lang');

            if (in_array($lang, self::LOCALES, true)) {
                session()->put(self::SESSION_LOCALE_KEY, $lang);
            }
        }

        // Set app locale
        app()->setLocale(session()->get(self::SESSION_LOCALE_KEY));

        return $next($request);
    }
}
