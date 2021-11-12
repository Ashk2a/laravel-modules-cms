<?php

namespace Modules\Core\Providers;

use Illuminate\Foundation\Support\Providers\RouteServiceProvider;
use Illuminate\Support\Facades\Route;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;

abstract class AbstractRouteServiceProvider extends RouteServiceProvider
{
    private const MODULE_NAMESPACE = 'Modules\%s\Http\Controllers';

    /**
     * @var string
     */
    protected string $moduleName;

    /**
     * @return void
     */
    public function map(): void
    {
        // Web
        Route::prefix(LaravelLocalization::setLocale())
            ->middleware(['web', 'localeSessionRedirect', 'localizationRedirect', 'localeViewPath'])
            ->group(function () {
                $this->mapWebRoutes();
                $this->mapWebManagerRoutes();
            });

        // Api
        $this->mapApiRoutes();
    }

    /**
     * @return string
     */
    protected function getModuleNamespace(): string
    {
        return sprintf(self::MODULE_NAMESPACE, $this->moduleName);
    }

    /**
     * @return void
     */
    protected function mapWebRoutes(): void
    {
        $routeFile = module_path($this->moduleName, '/Routes/web.php');

        if (file_exists($routeFile)) {
            Route::prefix('')
                ->namespace($this->namespace)
                ->group($routeFile);
        }
    }

    /**
     * @return void
     */
    protected function mapWebManagerRoutes(): void
    {
        $routeFile = module_path($this->moduleName, '/Routes/web_manager.php');

        if (file_exists($routeFile)) {
            Route::prefix('manager')
                ->middleware(['auth:web', 'can:manager'])
                ->namespace($this->namespace)
                ->group($routeFile);
        }
    }

    /**
     * @return void
     */
    protected function mapApiRoutes(): void
    {
        $routeFile = module_path($this->moduleName, '/Routes/api.php');

        if (file_exists($routeFile)) {
            Route::prefix('api')
                ->middleware('api')
                ->namespace($this->namespace)
                ->group($routeFile);
        }
    }
}
