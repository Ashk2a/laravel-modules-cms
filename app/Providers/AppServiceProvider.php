<?php

namespace App\Providers;

use App\Contracts\Hashing\WotlkHasher;
use App\Models\DbConnection;
use App\Notifications\Channels\DatabaseChannel;
use App\Security\Hashing\AzerothHash;
use App\Services\AuthService;
use Illuminate\Database\QueryException;
use Illuminate\Notifications\Channels\DatabaseChannel as LaravelDatabaseChannel;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * @return void
     */
    public function register(): void
    {
        // Add default WoltkHasher for in game password
        $this->app->singleton(WotlkHasher::class, fn() => new AzerothHash());

        // Override existing DatabaseChannel
        $this->app->bind(LaravelDatabaseChannel::class, DatabaseChannel::class);

        // Register helpers services
        $this->app->singleton(AuthService::class, fn() => new AuthService());
    }

    /**
     * @return void
     */
    public function boot(): void
    {
        $this->addDbConnectionsToConfig();
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
