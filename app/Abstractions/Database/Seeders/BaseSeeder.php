<?php

namespace App\Abstractions\Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Database\Seeders\UserSeeder;
use Illuminate\Database\Seeder;

abstract class BaseSeeder extends Seeder
{
    /**
     * @return User
     */
    public function fetchAdminUser(): User
    {
        return User::where('email', UserSeeder::ADMIN_EMAIL)->first();
    }

    /**
     * @param string $roleName
     * @return Role
     */
    public function fetchRoleByName(string $roleName): Role
    {
        return Role::where('name', $roleName)->first();
    }
}
