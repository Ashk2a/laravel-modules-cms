<?php

namespace Modules\Auth\Providers;

use Modules\Auth\Contracts\Hashing\WotlkHasher;
use Modules\Auth\Security\Hashing\AzerothHash;
use Modules\Core\Providers\AbstractModuleServiceProvider;

class ModuleServiceProvider extends AbstractModuleServiceProvider
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
     * @inheritDoc
     */
    public function register(): void
    {
        $this->app->singleton(WotlkHasher::class, fn() => new AzerothHash());
    }
}
