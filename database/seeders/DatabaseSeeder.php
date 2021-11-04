<?php

namespace Database\Seeders;

use App\Models\Auth\Account;
use App\Models\DbConnection;
use App\Models\MenuItem;
use App\Models\News;
use App\Models\NewsCategory;
use App\Models\Server;
use App\Models\User;
use App\Services\AuthService;
use App\Services\NewsService;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Crypt;

class DatabaseSeeder extends Seeder
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

    private const MENU = [
        // Left side
        [
            'name' => 'News',
            'type' => MenuItem::TYPE_ROOT_SIDE_LEFT,
            'href' => '/news'
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

    private const NEWS_CATEGORIES = [
        ['en' => 'News', 'fr' => 'Nouveautés'],
        ['en' => 'Events', 'fr' => 'Évènements'],
        ['en' => 'Competition', 'fr' => 'Concours'],
    ];

    private array $dbConnectionTemplate;

    private User $adminUser;

    /**
     * @param AuthService $authService
     * @param NewsService $newsService
     */
    public function __construct(
        private AuthService $authService,
        private NewsService $newsService
    )
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

        // Clear all accounts for tests
        Account::where('id', '>', 0)->delete();

        $this->adminUser = $this->createAdminUser();
        $this->createDefaultServer();
        $this->createMenu();

        $this->createNewsCategories();
        $this->createNews(10);
    }

    /**
     * @return User
     */
    private function createAdminUser(): User
    {
        return $this->authService->register(
            'admin',
            'admin',
            'admin@example.com',
            'password',
            true
        );
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
                    $this->createMenuItem(
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

    /**
     * @return void
     */
    private function createNewsCategories(): void
    {
        foreach (self::NEWS_CATEGORIES as $categoryNames) {
            NewsCategory::create([
                'name' => $categoryNames
            ]);
        }
    }

    /**
     * @param int $count
     * @return void
     */
    private function createNews(int $count = 30): void
    {
        /**
         * @var $allNews News[]
         */
        $allNews = News::factory()
            ->count($count)
            ->for($this->adminUser, 'author')
            ->make();

        foreach ($allNews as $news) {
            $this->newsService->create(
                $news->author,
                $news->getTranslations('title'),
                $news->getTranslations('description'),
                $news->getTranslations('content'),
                $news->category
            );
        }
    }
}
