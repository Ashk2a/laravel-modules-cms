<?php

namespace Modules\Auth\Providers;

use Modules\Core\Providers\ModuleServiceProvider;

class AuthServiceProvider extends ModuleServiceProvider
{
    /**
     * @var string
     */
    protected string $moduleName = 'Auth';

    /**
     * @var string
     */
    protected string $moduleNameLower = 'auth';

    /**
     * @var array
     */
    protected array $middleware = [];

    /**
     * @var array
     */
    protected array $routeMiddleware = [];

    /**
     * @var array
     */
    protected array $middlewareGroups = [];
}
