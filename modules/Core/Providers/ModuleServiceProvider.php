<?php

namespace Modules\Core\Providers;

use Config;
use Illuminate\Contracts\Http\Kernel;
use Illuminate\Routing\Router;
use Illuminate\Support\ServiceProvider;

abstract class ModuleServiceProvider extends ServiceProvider
{
    /**
     * @var string
     */
    protected string $moduleName;

    /**
     * @var string
     */
    protected string $moduleNameLower;

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

    /**
     * @return void
     */
    public function boot(): void
    {
        $this
            ->registerMiddleware()
            ->registerConfig()
            ->registerTranslations()
            ->registerViews()
            ->loadMigrationsFrom(module_path($this->moduleName, 'Database/Migrations'));
    }

    /**
     * @return $this
     */
    protected function registerMiddleware(): self
    {
        $kernel = app(Kernel::class);
        $router = app(Router::class);

        foreach ($this->middleware as $middleware) {
            $kernel->pushMiddleware($middleware);
        }

        foreach ($this->routeMiddleware as $name => $class) {
            $router->aliasMiddleware($name, $class);
        }

        foreach ($this->middlewareGroups as $name => $group) {
            $router->middlewareGroup($name, $group);
        }

        return $this;
    }

    /**
     * @return $this
     */
    protected function registerConfig(): self
    {
        $this->publishes([
            module_path($this->moduleName, 'Config/config.php') => config_path($this->moduleNameLower . '.php'),
        ], 'config');

        $this->mergeConfigFrom(module_path($this->moduleName, 'Config/config.php'), $this->moduleNameLower);

        return $this;
    }

    /**
     * @return $this
     */
    protected function registerTranslations(): self
    {
        $langPath = resource_path('lang/modules/' . $this->moduleNameLower);

        if (is_dir($langPath)) {
            $this->loadTranslationsFrom($langPath, $this->moduleNameLower);
        } else {
            $this->loadTranslationsFrom(
                module_path($this->moduleName, 'Resources/lang'),
                $this->moduleNameLower
            );
        }

        return $this;
    }

    /**
     * @return $this
     */
    protected function registerViews(): self
    {
        $viewPath = resource_path('views/modules/' . $this->moduleNameLower);

        $sourcePath = module_path($this->moduleName, 'Resources/views');

        $this->publishes(
            [$sourcePath => $viewPath],
            ['views', $this->moduleNameLower . '-module-views']
        );

        $paths = [];

        foreach (Config::get('view.paths') as $path) {
            if (is_dir($path . '/modules/' . $this->moduleNameLower)) {
                $paths[] = $path . '/modules/' . $this->moduleNameLower;
            }
        }

        $this->loadViewsFrom(array_merge($paths, [$sourcePath]), $this->moduleNameLower);

        return $this;
    }

    /**
     * @return void
     */
    public function register(): void
    {
    }

    /**
     * @return array
     */
    public function provides(): array
    {
        return parent::provides();
    }
}
