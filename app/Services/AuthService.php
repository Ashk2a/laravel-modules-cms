<?php

namespace App\Services;

use App\Contracts\Hashing\WotlkHasher;
use App\Exceptions\Auth\UserAlreadyVerifiedException;
use App\Exceptions\Auth\UserNotVerifiedException;
use App\Models\Auth\Account;
use App\Models\Reminder;
use App\Models\User;
use App\Models\Verification;
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
     * @param bool|null $verify
     * @return User|null
     */
    public function register(string $username, string $nickname, string $email, string $password, ?bool $verify = null): ?User
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

        $verification = new Verification();
        $verification->user()->associate($user);
        $verification->save();

        $verify = $verify ?? Config::get('auth.verification.auto');

        if ($verify) {
            try {
                $this->verify($verification);
            } catch (UserAlreadyVerifiedException) {
                // Cannot happen in this case
            }
        }

        // TODO: emit event with user and verification as parameters to send a potential notification (mail, discord)

        return $user;
    }

    /**
     * @param string $email
     * @param string $password
     * @param bool $rememberMe
     * @return User|null
     * @throws UserNotVerifiedException
     */
    public function login(string $email, string $password, bool $rememberMe = false): ?User
    {
        if (false === Auth::validate([$email, $password])) {
            return null;
        }

        $user = User::where('email', $email)->firstOrFail();

        if (false === $user->isVerified()) {
            throw new UserNotVerifiedException();
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
     * @param Verification $verification
     * @throws UserAlreadyVerifiedException
     */
    public function verify(Verification $verification): void
    {
        $user = $verification->user;

        if ($user->isVerified()) {
            throw new UserAlreadyVerifiedException();
        }

        $verification->update([
            'completed' => true
        ]);

        $user->verifications()->where('completed', false)->delete();
    }

    /**
     * @param Reminder $reminder
     * @param string $newPassword
     * @return void
     */
    public function reset(Reminder $reminder, string $newPassword): void
    {

    }
}
