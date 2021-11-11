<?php

namespace Modules\News\Providers;

use Modules\Core\Providers\AbstractModuleServiceProvider;

class ModuleServiceProvider extends AbstractModuleServiceProvider
{
    /**
     * @var string
     */
    protected string $moduleName = 'News';

    /**
     * @var string
     */
    protected string $moduleNameLower = 'news';
}
