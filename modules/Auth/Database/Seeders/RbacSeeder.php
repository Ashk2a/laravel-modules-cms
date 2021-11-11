<?php

namespace Modules\Auth\Database\Seeders;

use Modules\Auth\Models\Role;
use Modules\Core\Database\Seeders\AbstractSeeder;
use Spatie\Permission\Models\Permission;

class RbacSeeder extends AbstractSeeder
{
    private const ROLES = [
        Role::USER => [
            'panel',
            'profiles.show',
            'news.index',
            'news.show',
            'comments.create',
            'comments.like',
            'comments.reply',
        ],
        Role::MODERATOR => [
            'manager',
            'manager.users.index',
            'manager.users.show',
            'manager.news.index',
            'manager.news.show'
        ],
        Role::ADMINISTRATOR => [
            'manager.news.create',
            'manager.news.update',
            'manager.news.destroy',
            'manager.users.update',
        ]
    ];

    /**
     * @return void
     */
    public function run(): void
    {
        foreach (self::ROLES as $roleName => $permissionNames) {
            $permissions = [];

            foreach ($permissionNames as $permissionName) {
                $permissions[] = Permission::create([
                    'name' => $permissionName
                ]);
            }
            /**
             * @var Role $role
             */
            $role = Role::create([
                'name' => $roleName
            ]);

            $role->permissions()->saveMany($permissions);
        }
    }
}
