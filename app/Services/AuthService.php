<?php

namespace App\Services;

use App\Contracts\Hashing\WotlkHasher;
use App\Exceptions\Auth\UserAlreadyActivatedException;
use App\Exceptions\Auth\UserBadActivationException;
use App\Exceptions\Auth\UserNotActivatedException;
use App\Models\Activation;
use App\Models\Auth\Account;
use App\Models\User;
use Illuminate\Contracts\Container\BindingResolutionException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AuthService
{
    /**
     * @param string $username
     * @param string $nickname
     * @param string $email
     * @param string $password
     * @return User|null
     */
    public function register(string $username, string $nickname, string $email, string $password): ?User
    {
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

        $activation = new Activation();
        $activation->user()->associate($user);
        $activation->save();

        $complete = Config::get('auth.activation.auto_completed');

        if ($complete) {
            try {
                $this->complete($user, $activation->token);
            } catch (UserAlreadyActivatedException | UserBadActivationException) {
                // Cannot happen in this case
            }
        }

        // TODO: emit event with user and activation as parameters to send a potential notification (mail, discord)

        return $user;
    }

    /**
     * @param string $email
     * @param string $password
     * @param bool $rememberMe
     * @return User|null
     * @throws UserNotActivatedException
     */
    public function login(string $email, string $password, bool $rememberMe = false): ?User
    {
        if (false === Auth::validate([$email, $password])) {
            return null;
        }

        $user = User::where('email', $email)->firstOrFail();

        if (false === $user->isActivated()) {
            throw new UserNotActivatedException();
        }

        Auth::login($user, $rememberMe);

        return $user;
    }

    /**
     * @return bool
     */
    public function logout(): bool
    {
        $user = Auth::user();

        if (null === $user) {
            return false;
        }

        Auth::logout();

        return true;
    }

    /**
     * @param User $user
     * @param string $token
     * @throws UserAlreadyActivatedException
     * @throws UserBadActivationException
     */
    public function complete(User $user, string $token): void
    {
        $activation = $user->activations->where('token', $token)->first();

        if (null === $activation) {
            throw new UserBadActivationException();
        }

        if ($activation->completed) {
            throw new UserAlreadyActivatedException();
        }

        $activation->update([
            'completed' => true
        ]);
    }

    /**
     * @param string $email
     * @return User|null
     */
    public function forgotPassword(string $email): ?User {
        $user = User::where('email', $email)->first();

        if (null == $user) {
            return null;
        }

        // TODO: reminder

        return $user;
    }
}
