<?php

namespace Modules\Game\Providers;

use Modules\Core\Providers\AbstractModuleServiceProvider;

class ModuleServiceProvider extends AbstractModuleServiceProvider
{
    /**
     * @var string
     */
    protected string $moduleName = 'Game';

    /**
     * @var string
     */
    protected string $moduleNameLower = 'game';
}
