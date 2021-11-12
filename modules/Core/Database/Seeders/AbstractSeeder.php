<?php

namespace Modules\Core\Database\Seeders;

use Illuminate\Database\Seeder as LaravelSeeder;
use Modules\Auth\Database\Seeders\UserSeeder;
use Modules\Auth\Models\Role;
use Modules\Auth\Models\User;

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
