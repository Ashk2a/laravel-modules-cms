<?php

namespace Modules\Panel\Providers;

use Modules\Core\Providers\AbstractModuleServiceProvider;

class ModuleServiceProvider extends AbstractModuleServiceProvider
{
    /**
     * @var string
     */
    protected string $moduleName = 'Panel';

    /**
     * @var string
     */
    protected string $moduleNameLower = 'panel';
}
