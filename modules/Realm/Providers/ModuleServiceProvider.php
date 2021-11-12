<?php

namespace Modules\Realm\Providers;

use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Config;
use Modules\Core\Providers\AbstractModuleServiceProvider;
use Modules\Realm\Models\DbConnection;

class ModuleServiceProvider extends AbstractModuleServiceProvider
{
    /**
     * @var string
     */
    protected string $moduleName = 'Realm';

    /**
     * @var string
     */
    protected string $moduleNameLower = 'realm';

    /**
     * @inheritDoc
     */
    public function boot(): void
    {
        parent::boot();

        $this->addDbConnectionToDatabaseConfig();
    }

    /**
     * @return void
     */
    private function addDbConnectionToDatabaseConfig(): void
    {
        try {
            $connections = DbConnection::all();

            foreach ($connections as $connection) {
                Config::set('database.connections.' . $connection->name, $connection->format());
            }
        } catch (QueryException) {
            return;
        }
    }
}
