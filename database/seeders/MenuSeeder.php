<?php

namespace Database\Seeders;

use App\Abstractions\Database\Seeders\BaseSeeder;
use App\Models\MenuItem;
use Illuminate\Support\Arr;

class MenuSeeder extends BaseSeeder
{
    private const PUBLIC_MENU = [
        // Left side
        [
            'name' => ['en' => 'News', 'fr' => 'Actualités'],
            'type' => MenuItem::TYPE_ROOT_SIDE_LEFT,
            'href' => '/news'
        ],
        [
            'name' => ['en' => 'Game', 'fr' => 'Jeu'],
            'type' => MenuItem::TYPE_ROOT_SIDE_LEFT,
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
            'name' => ['en' => 'Shop', 'fr' => 'Boutique'],
            'type' => MenuItem::TYPE_ROOT_SIDE_RIGHT,
            'href' => '/'
        ],
        [
            'name' => ['en' => 'Create an account', 'fr' => 'Créer un compte'],
            'type' => MenuItem::TYPE_ROOT_SIDE_RIGHT,
            'href' => '/register'
        ],
    ];

    private const ADMIN_MENU = [];

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
        $href = Arr::get($definition, 'href');
        $typeHref = Arr::get($definition, 'type_href');

        if (null !== $href && null === $typeHref) {
            $typeHref = MenuItem::TYPE_HREF_INTERNAL;
        }

        return MenuItem::create([
            'position' => $position,
            'name' => $definition['name'],
            'type' => $type,
            'href' => $href,
            'type_href' => $typeHref,
            'parent_id' => $parentId,
            'auth_condition' => Arr::get($definition, 'auth_condition', MenuItem::AUTH_CONDITION_NONE),
            'required_permission_id' => Arr::get($definition, 'required_permission_id')
        ]);
    }
}
