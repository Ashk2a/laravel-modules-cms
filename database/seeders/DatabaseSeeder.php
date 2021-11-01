<?php

namespace Database\Seeders;

use App\Models\DbConnection;
use App\Models\MenuItem;
use App\Models\Server;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\URL;

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

    private const MENU = [
        // Left side
        [
            'name' => 'News',
            'type' => MenuItem::TYPE_ROOT_SIDE_LEFT,
            'href' => '/'
        ],
        [
            'name' => 'Game',
            'type' => MenuItem::TYPE_ROOT_SIDE_LEFT,
            'categories' => [
                [
                    'name' => 'Play with us',
                    'items' => [
                        [
                            'name' => 'Create an account',
                            'href' => '#'
                        ],
                        [
                            'name' => 'Account transfer',
                            'href' => '#'
                        ],
                        [
                            'name' => 'Download the game',
                            'href' => '#'
                        ]
                    ]
                ],
                [
                    'name' => 'Mythic Difficulty',
                    'items' => [
                        [
                            'name' => 'About us',
                            'href' => '#'
                        ],
                        [
                            'name' => 'The concept',
                            'href' => '#'
                        ],
                        [
                            'name' => 'Rules and conditions',
                            'href' => '#'
                        ]
                    ]
                ]
            ]
        ],
        [
            'name' => 'Community',
            'type' => MenuItem::TYPE_ROOT_SIDE_LEFT,
            'categories' => [
                [
                    'name' => 'Category 1',
                    'items' => [
                        [
                            'name' => 'Item 1',
                            'href' => '#'
                        ],
                        [
                            'name' => 'Item 2',
                            'href' => '#'
                        ],
                        [
                            'name' => 'Item 3',
                            'href' => '#'
                        ]
                    ]
                ],
                [
                    'name' => 'Category 2',
                    'items' => [
                        [
                            'name' => 'Item 1',
                            'href' => '#'
                        ],
                        [
                            'name' => 'Item 2',
                            'href' => '#'
                        ],
                        [
                            'name' => 'Item 3',
                            'href' => '#'
                        ]
                    ]
                ]
            ]
        ],
        // Right side
        [
            'name' => 'Vote',
            'type' => MenuItem::TYPE_ROOT_SIDE_RIGHT,
            'href' => '/'
        ],
        [
            'name' => 'Shop',
            'type' => MenuItem::TYPE_ROOT_SIDE_RIGHT,
            'href' => '/'
        ],
        [
            'name' => 'Create an account',
            'type' => MenuItem::TYPE_ROOT_SIDE_RIGHT,
            'href' => '/auth/register'
        ],
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
        Model::unguard();

        $this->createDefaultServer();
        $this->createMenu();
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

    /**
     * @return void
     */
    private function createMenu(): void
    {
        foreach (self::MENU as $rootPosition => $rootDefinition) {
            $root = $this->createMenuItem(
                $rootPosition,
                $rootDefinition['type'],
                null,
                $rootDefinition
            );

            foreach ($rootDefinition['categories'] ?? [] as $categoryPosition => $categoryDefinition) {
                $category = $this->createMenuItem(
                    $categoryPosition,
                    MenuItem::TYPE_CATEGORY,
                    $root->id,
                    $categoryDefinition
                );

                foreach ($categoryDefinition['items'] ?? [] as $itemPosition => $itemDefinition) {
                    $item = $this->createMenuItem(
                        $itemPosition,
                        MenuItem::TYPE_NORMAL_ITEM,
                        $category->id,
                        $itemDefinition
                    );
                }
            }
        }
    }

    /**
     * @param int $position
     * @param int $type
     * @param int|null $parentId
     * @param array $definition
     * @return MenuItem
     */
    private function createMenuItem(int $position, int $type, ?int $parentId = null, array $definition = []): MenuItem
    {
        $menuItem = new MenuItem();
        $menuItem->fill([
            'position' => $position,
            'name' => $definition['name'],
            'type' => $type,
            'href' => $definition['href'] ?? null,
            'parent_id' => $parentId
        ]);

        $menuItem->save();

        return $menuItem;
    }
}
