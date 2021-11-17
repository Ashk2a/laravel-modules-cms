<?php

namespace Modules\Core\Database\Seeders;

use Illuminate\Database\Seeder as LaravelSeeder;
use Modules\User\Database\Seeders\UserSeeder;
use Modules\User\Models\Role;
use Modules\User\Models\User;

abstract class AbstractSeeder extends LaravelSeeder
{
    public function fetchAdminUser(): User
    {
        return User::where('email', UserSeeder::ADMIN_EMAIL)->first();
    }

    public function fetchRoleByName(string $roleName): Role
    {
        return Role::where('name', $roleName)->first();
    }
}
