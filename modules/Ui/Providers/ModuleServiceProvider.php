<?php

namespace Modules\Ui\Providers;

use Illuminate\Support\Facades\Blade;
use Modules\Core\Providers\AbstractModuleServiceProvider;
use Nwidart\Modules\Facades\Module;

class ModuleServiceProvider extends AbstractModuleServiceProvider
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
     * @inheritDoc
     */
    public function boot(): void
    {
        parent::boot();

        Blade::if('module', function(string $moduleName) {
            $module = Module::find($moduleName);

            if (null === $module) {
                return false;
            }

            return $module->isEnabled();
        });
    }
}
