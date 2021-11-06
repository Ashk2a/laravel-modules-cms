<?php

namespace Database\Seeders;

use App\Models\MenuItem;
use Illuminate\Database\Seeder;

class MenuSeeder extends Seeder
{
    private const PUBLIC_MENU = [
        // Left side
        [
            'name' => ['en' => 'News', 'fr' => 'Actualités'],
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
