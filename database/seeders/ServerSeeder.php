<?php

namespace Database\Seeders;

use App\Abstractions\Database\Seeders\BaseSeeder;
use App\Models\DbConnection;
use App\Models\Server;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Crypt;

class ServerSeeder extends BaseSeeder
{
    private const WORLD_DB_CONNECTION = [
        'name' => 'docker-world',
        'type' => DbConnection::TYPE_WORLD,
        'database' => 'acore_world',
    ];

    private const CHARACTERS_DB_CONNECTION = [
        'name' => 'docker-characters',
        'type' => DbConnection::TYPE_CHARACTERS,
        'database' => 'acore_characters',
    ];

    private array $dbConnectionTemplate;

    public function __construct()
    {
        $this->dbConnectionTemplate = [
            'host' => Config::get('database.connections.auth.host'),
            'port' => Config::get('database.connections.auth.port'),
            'username' => Config::get('database.connections.auth.username'),
            'password' => Crypt::encryptString(
                Config::get('database.connections.auth.password')
            )
        ];
    }

    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run(): void
    {
        $this->createDefaultServer();
    }

    /**
     * @return void
     */
    private function createDefaultServer(): void
    {
        $worldDbConnection = DbConnection::factory()
            ->create(
                array_merge(
                    $this->dbConnectionTemplate,
                    self::WORLD_DB_CONNECTION
                )
            );

        $charactersDbConnection = DbConnection::factory()
            ->create(
                array_merge(
                    $this->dbConnectionTemplate,
                    self::CHARACTERS_DB_CONNECTION
                )
            );

        Server::factory()
            ->create([
                'realmlist_id' => 1,
                'world_db_connection_id' => $worldDbConnection->id,
                'characters_db_connection_id' => $charactersDbConnection->id
            ]);
    }
}
