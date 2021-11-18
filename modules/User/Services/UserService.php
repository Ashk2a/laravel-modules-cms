<?php

namespace Modules\User\Services;

use Illuminate\Support\Facades\Hash;
use Modules\User\Events\UserUpdateEmail;
use Modules\User\Events\UserUpdateNickname;
use Modules\User\Events\UserUpdatePassword;
use Modules\User\Models\User;

class UserService
{
    /**
     * @param User $user
     * @param string $nickname
     */
    public function updateNickname(User $user, string $nickname): void
    {
        $oldNickname = $user->nickname;

        $user->update([
            'nickname' => $nickname
        ]);

        UserUpdateNickname::dispatch($user, $nickname, $oldNickname);
    }

    /**
     * @param User $user
     * @param string $email
     */
    public function updateEmail(User $user, string $email): void
    {
        $oldEmail = $user->email;

        $user->update([
            'email' => $email
        ]);

        foreach ($user->accounts as $account) {
            $account->update([
                'email' => $email
            ]);
        }

        UserUpdateEmail::dispatch($user, $email, $oldEmail);
    }

    /**
     * @param User $user
     * @param string $password
     */
    public function updatePassword(User $user, string $password): void
    {
        $user->update([
            'password' => Hash::make($password)
        ]);

        UserUpdatePassword::dispatch($user);
    }
}
