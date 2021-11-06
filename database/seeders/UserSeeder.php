<?php

namespace Database\Seeders;

use App\Models\Auth\Account;
use App\Models\User;
use App\Services\AuthService;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
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
     * @return User
     */
    public static function fetchAdminUser(): User
    {
        return User::where('email', self::ADMIN_EMAIL)->first();
    }

    /**
     * @return void
     */
    public function run(): void
    {
        // Remove admin auth.account
        Account::where('username', self::ADMIN_USERNAME)->delete();

        $this->authService->register(
            self::ADMIN_USERNAME,
            self::ADMIN_NICKNAME,
            self::ADMIN_EMAIL,
            self::ADMIN_PASSWORD,
            true
        );
    }
}
