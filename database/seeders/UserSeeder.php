<?php

namespace Database\Seeders;

use App\Abstractions\Database\Seeders\BaseSeeder;
use App\Models\Auth\Account;
use App\Models\Role;
use App\Models\User;
use App\Services\AuthService;

class UserSeeder extends BaseSeeder
{
    public const ADMIN_USERNAME = 'admin';
    public const ADMIN_NICKNAME = 'admin';
    public const ADMIN_EMAIL = 'admin@example.com';
    public const ADMIN_PASSWORD = 'password';

    /**
     * @param AuthService $authService
     */
    public function __construct(private AuthService $authService)
    {
    }

    /**
     * @return void
     */
    public function run(): void
    {
        // Remove admin auth.account
        Account::where('username', self::ADMIN_USERNAME)->delete();

        $user = $this->authService->register(
            self::ADMIN_USERNAME,
            self::ADMIN_NICKNAME,
            self::ADMIN_EMAIL,
            self::ADMIN_PASSWORD,
            true
        );

        $user?->assignRole(Role::MODERATOR, Role::ADMINISTRATOR);
    }
}
