<?php

namespace Modules\Auth\Providers;

use Modules\Auth\Guard\SessionGuard;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Auth;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * @var array
     */
    protected $policies = [];

    /**
     * @return void
     */
    public function boot(): void
    {
        $this->registerPolicies();

        // Override `session` driver by our custom guard
        Auth::extend('session', function ($app, $name, array $config) {
            return new SessionGuard(
                $name,
                Auth::createUserProvider($config['provider'] ?? null),
                $this->app['session.store']
            );
        });
    }
}
