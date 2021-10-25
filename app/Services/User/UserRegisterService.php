<?php

namespace App\Services\User;

use App\Contracts\Hashing\WotlkHasher;
use App\Models\Auth\Account;
use App\Models\User;
use App\Contracts\Services\User\UserRegisterService as RegisterServiceContract;
use Illuminate\Contracts\Container\BindingResolutionException;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserRegisterService implements RegisterServiceContract
{
    /**
     * @param string $username
     * @param string $nickname
     * @param string $email
     * @param string $password
     * @return User|null
     */
    public function register(string $username, string $nickname, string $email, string $password): ?User {
        $wotlkHasher = app(WotlkHasher::class);

        $email = Str::lower($email);
        $username = Str::upper($username);

        try {
            [$salt, $verifier] = $wotlkHasher->make($username, $password);
        } catch (BindingResolutionException) {
            return null;
        }

        $account = new Account();

        $account
            ->fill([
                'username' => $username,
                'email' => $email,
                'reg_mail' => $email,
                'salt' => $salt,
                'verifier' => $verifier
            ])
            ->save();

        $user = new User();

        $user->account()->associate($account);

        $user
            ->fill([
                'nickname' => $nickname,
                'email' => $email,
                'password' => Hash::make($password)
            ])
            ->save();

        return $user;
    }
}
