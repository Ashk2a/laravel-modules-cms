<?php

namespace Modules\Ui\Providers;

use Modules\Core\Providers\ModuleServiceProvider;

class UiServiceProvider extends ModuleServiceProvider
{
    /**
     * @var string
     */
    protected string $moduleName = 'Ui';

    /**
     * @var string
     */
    protected string $moduleNameLower = 'ui';

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
