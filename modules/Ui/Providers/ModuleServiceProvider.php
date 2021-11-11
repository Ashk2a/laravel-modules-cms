<?php

namespace Modules\Ui\Providers;

use Modules\Core\Providers\AbstractModuleServiceProvider;

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
}
