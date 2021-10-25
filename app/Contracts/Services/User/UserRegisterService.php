<?php

namespace App\Contracts\Services\User;

use App\Models\User;

interface UserRegisterService
{
    public function register(string $username, string $nickname, string $email, string $password): ?User;
}
