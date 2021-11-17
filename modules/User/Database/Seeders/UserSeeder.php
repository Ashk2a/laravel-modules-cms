<?php

namespace Modules\User\Database\Seeders;

use Modules\User\Models\Role;
use Modules\User\Services\AuthService;
use Modules\Core\Database\Seeders\AbstractSeeder;
use Modules\Game\Models\Auth\Account;

class UserSeeder extends AbstractSeeder
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
