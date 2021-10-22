<?php

namespace Database\Seeders;

use App\Models\DbConnection;
use App\Models\Server;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Crypt;

class DatabaseSeeder extends Seeder
{
    private const DEFAULT_WORLD_DB_CONNECTION = [
        'name' => 'docker-world',
        'type' => DbConnection::TYPE_WORLD,
        'database' => 'acore_world',
    ];

    private const DEFAULT_CHARACTERS_DB_CONNECTION = [
        'name' => 'docker-characters',
        'type' => DbConnection::TYPE_CHARACTERS,
        'database' => 'acore_characters',
    ];

    /**
     * @param array $dbConnectionTemplate
     */
    public function __construct(private array $dbConnectionTemplate = [])
    {
        $this->dbConnectionTemplate = [
            'host' => Config::get('database.connections.auth.host'),
            'port' => Config::get('database.connections.auth.port'),
            'username' => Config::get('database.connections.auth.username'),
            'password' => Crypt::encryptString(
                Config::get('database.connections.auth.username')
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
        Model::unguard();

        $this->createDefaultServer();
    }

    /**
     * @return Server
     */
    private function createDefaultServer(): Server
    {
        $worldDbConnection = DbConnection::factory()
            ->create(
                array_merge(
                    $this->dbConnectionTemplate,
                    self::DEFAULT_WORLD_DB_CONNECTION
                )
            );

        $charactersDbConnection = DbConnection::factory()
            ->create(
                array_merge(
                    $this->dbConnectionTemplate,
                    self::DEFAULT_CHARACTERS_DB_CONNECTION
                )
            );

        return Server::factory()
            ->create([
                'realmlist_id' => 1,
                'world_db_connection_id' => $worldDbConnection->id,
                'characters_db_connection_id' => $charactersDbConnection->id
            ]);
    }
}
