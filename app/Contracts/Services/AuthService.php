<?php

namespace App\Contracts\Services;

use App\Models\User;

interface AuthService
{
    /**
     * @param string $username
     * @param string $nickname
     * @param string $email
     * @param string $password
     * @return User|null
     */
    public function register(string $username, string $nickname, string $email, string $password): ?User;

    /**
     * @param string $email
     * @param string $password
     * @param bool $rememberMe
     * @return User|null
     */
    public function login(string $email, string $password, bool $rememberMe = false): ?User;
}
