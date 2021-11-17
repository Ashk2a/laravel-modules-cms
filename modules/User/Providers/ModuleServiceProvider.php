<?php

namespace Modules\User\Providers;

use Illuminate\Auth\Middleware\AuthenticateWithBasicAuth;
use Illuminate\Auth\Middleware\Authorize;
use Illuminate\Auth\Middleware\RequirePassword;
use Illuminate\Routing\Middleware\ThrottleRequests;
use Modules\User\Console\ClearReminders;
use Modules\User\Console\ClearVerifications;
use Modules\User\Console\UserCreate;
use Modules\User\Contracts\Hashing\WotlkHasher;
use Modules\User\Security\Hashing\AzerothHash;
use Modules\Core\Http\Middleware\Authenticate;
use Modules\Core\Http\Middleware\RedirectIfAuthenticated;
use Modules\Core\Providers\AbstractModuleServiceProvider;
use Spatie\Permission\Middlewares\PermissionMiddleware;
use Spatie\Permission\Middlewares\RoleMiddleware;
use Spatie\Permission\Middlewares\RoleOrPermissionMiddleware;

class ModuleServiceProvider extends AbstractModuleServiceProvider
{
    /**
     * @var string
     */
    protected string $moduleName = 'User';

    /**
     * @var string
     */
    protected string $moduleNameLower = 'user';

    /**
     * @var array|string[]
     */
    protected array $routeMiddleware = [
        'auth' => Authenticate::class,
        'auth.basic' => AuthenticateWithBasicAuth::class,
        'can' => Authorize::class,
        'guest' => RedirectIfAuthenticated::class,
        'password.confirm' => RequirePassword::class,
        'throttle' => ThrottleRequests::class,
        'role' => RoleMiddleware::class,
        'permission' => PermissionMiddleware::class,
        'role_or_permission' => RoleOrPermissionMiddleware::class,
    ];

    /**
     * @var array|string[]
     */
    protected array $commands = [
        ClearReminders::class,
        ClearVerifications::class,
        UserCreate::class
    ];

    /**
     * @inheritDoc
     */
    public function register(): void
    {
        $this->app->singleton(WotlkHasher::class, fn() => new AzerothHash());
    }
}
