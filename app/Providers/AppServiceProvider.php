<?php

namespace App\Providers;

use App\Models\DbConnection;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * @return void
     */
    public function register(): void
    {
    }

    /**
     * @return void
     */
    public function boot(): void
    {
        $this->addDbConnectionsToConfig();
    }

    private function addDbConnectionsToConfig(): void
    {
        $connections = DbConnection::all();

        foreach ($connections as $connection) {
            Config::set('database.connections.' . $connection->name, $connection->format());
        }
    }
}
