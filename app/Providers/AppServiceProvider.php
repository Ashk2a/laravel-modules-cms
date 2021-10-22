<?php

namespace App\Providers;

use App\Contracts\Hashing\WotlkHasher;
use App\Models\DbConnection;
use App\Security\Hashing\AzerothHash;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * @return void
     */
    public function register(): void
    {
        $this->registerWotlkHasher();
    }

    /**
     * @return void
     */
    public function boot(): void
    {
        $this->addDbConnectionsToConfig();
    }

    /**
     * @retur void
     */
    private function registerWotlkHasher(): void
    {
        $this->app->singleton(WotlkHasher::class, fn () => new AzerothHash());
    }

    /**
     * @return void
     */
    private function addDbConnectionsToConfig(): void
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
