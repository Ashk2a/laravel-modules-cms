<?php

namespace Modules\Ui\Database\Seeders;

use Illuminate\Support\Arr;
use Modules\Core\Database\Seeders\AbstractSeeder;
use Modules\Ui\Models\MenuItem;
use Spatie\Permission\Models\Permission;

class MenuSeeder extends AbstractSeeder
{
    private const PUBLIC_MENU = [
        // Left side
        [
            'name' => ['en' => 'News', 'fr' => 'Actualités'],
            'scope' => MenuItem::SCOPE_MAIN_LEFT,
            'type' => MenuItem::TYPE_ITEM,
            'href' => '/news'
        ],
        [
            'name' => ['en' => 'Game', 'fr' => 'Jeu'],
            'scope' => MenuItem::SCOPE_MAIN_LEFT,
            'type' => MenuItem::TYPE_ITEM,
            'categories' => [
                [
                    'name' => ['en' => 'Play with us', 'fr' => 'Jouer avec nous'],
                    'items' => [
                        [
                            'name' => ['en' => 'Create an account', 'fr' => 'Créer un compte'],
                            'href' => '#'
                        ],
                        [
                            'name' => ['en' => 'Account transfer', 'fr' => 'Transfert de compte'],
                            'href' => '#'
                        ],
                        [
                            'name' => ['en' => 'Download the game', 'fr' => 'Télécharger le jeu'],
                            'href' => '#'
                        ]
                    ]
                ],
                [
                    'name' => 'Mythic Difficulty',
                    'items' => [
                        [
                            'name' => ['en' => 'About us', 'fr' => 'À propos de nous'],
                            'href' => '#'
                        ],
                        [
                            'name' => ['en' => 'Our concept', 'fr' => 'Notre concept'],
                            'href' => '#'
                        ],
                        [
                            'name' => ['en' => 'Rules and conditions', 'fr' => 'Règles et conditions'],
                            'href' => '#'
                        ]
                    ]
                ]
            ]
        ],
        [
            'name' => 'Community',
            'scope' => MenuItem::SCOPE_MAIN_LEFT,
            'type' => MenuItem::TYPE_ITEM,
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
            'scope' => MenuItem::SCOPE_MAIN_RIGHT,
            'type' => MenuItem::TYPE_ITEM,
            'href' => '/'
        ],
        [
            'name' => ['en' => 'Shop', 'fr' => 'Boutique'],
            'scope' => MenuItem::SCOPE_MAIN_RIGHT,
            'type' => MenuItem::TYPE_ITEM,
            'href' => '/'
        ],
        [
            'name' => ['en' => 'Sign up', 'fr' => 'Inscription'],
            'scope' => MenuItem::SCOPE_MAIN_RIGHT,
            'type' => MenuItem::TYPE_ITEM,
            'href' => '/register',
            'auth_condition' => MenuItem::AUTH_CONDITION_ONLY_GUEST
        ],
        [
            'name' => ['en' => 'My panel', 'fr' => 'Mon panel'],
            'scope' => MenuItem::SCOPE_MAIN_RIGHT,
            'type' => MenuItem::TYPE_ITEM,
            'href' => '/',
            'auth_condition' => MenuItem::AUTH_CONDITION_ONLY_AUTHENTICATED,
            'required_permission_name' => 'panel.dashboard.index'
        ],
    ];

    private const ADMIN_MENU = [
        [
            'name' => ['en' => 'Dashboard', 'fr' => 'Tableau de bord'],
            'scope' => MenuItem::SCOPE_MAIN_MANAGER,
            'type' => MenuItem::TYPE_ITEM,
            'href' => '/manager',
            'required_permission_name' => 'manager.dashboard.index'
        ],
        [
            'name' => ['en' => 'News', 'fr' => 'Actualités'],
            'scope' => MenuItem::SCOPE_MAIN_MANAGER,
            'type' => MenuItem::TYPE_CATEGORY,
            'items' => [
                [
                    'name' => ['en' => 'Posts', 'fr' => 'Articles'],
                    'type' => MenuItem::TYPE_ITEM,
                    'href' => '/'
                ],
                [
                    'name' => ['en' => 'Categories', 'fr' => 'Catégories'],
                    'type' => MenuItem::TYPE_ITEM,
                    'href' => '/'
                ],
            ]
        ]
    ];

    /**
     * @return void
     */
    public function run(): void
    {
        $this->createMenu(self::PUBLIC_MENU);
        $this->createMenu(self::ADMIN_MENU);
    }

    /**
     * @param array $roots
     * @return void
     */
    private function createMenu(array $roots): void
    {
        foreach ($roots as $rootPosition => $rootDefinition) {
            $root = $this->createMenuItem(
                $rootPosition,
                $rootDefinition['type'],
                null,
                $rootDefinition
            );

            foreach ($rootDefinition['categories'] ?? [] as $categoryPosition => $categoryDefinition) {
                $categoryDefinition['scope'] = $rootDefinition['scope'];

                $category = $this->createMenuItem(
                    $categoryPosition,
                    MenuItem::TYPE_CATEGORY,
                    $root->id,
                    $categoryDefinition
                );

                foreach ($categoryDefinition['items'] ?? [] as $itemPosition => $itemDefinition) {
                    $itemDefinition['scope'] = $rootDefinition['scope'];

                    $this->createMenuItem(
                        $itemPosition,
                        MenuItem::TYPE_ITEM,
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
        $href = Arr::get($definition, 'href');
        $scope = Arr::get($definition, 'scope');
        $typeHref = Arr::get($definition, 'type_href');
        $requiredPermissionName = Arr::get($definition, 'required_permission_name');

        if (null !== $href && null === $typeHref) {
            $typeHref = MenuItem::TYPE_HREF_URL_INTERNAL;
        }

        if (null !== $requiredPermissionName) {
            $definition['required_permission_id'] = Permission::where('name', $requiredPermissionName)->first()?->id;
        }

        return MenuItem::create([
            'position' => $position,
            'name' => $definition['name'],
            'scope' => $scope,
            'type' => $type,
            'href' => $href,
            'type_href' => $typeHref,
            'parent_id' => $parentId,
            'auth_condition' => Arr::get($definition, 'auth_condition', MenuItem::AUTH_CONDITION_NONE),
            'required_permission_id' => Arr::get($definition, 'required_permission_id')
        ]);
    }
}
