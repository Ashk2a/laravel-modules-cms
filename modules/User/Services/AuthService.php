<?php

namespace Modules\User\Services;

use Modules\User\Contracts\Hashing\WotlkHasher;
use Modules\User\Events\UserForgetPassword;
use Modules\User\Events\UserRegistered;
use Modules\User\Events\UserResetPassword;
use Modules\User\Events\UserVerified;
use Modules\User\Exceptions\UserAlreadyVerifiedException;
use Modules\User\Exceptions\UserNotVerifiedException;
use Modules\User\Models\Reminder;
use Modules\User\Models\Role;
use Modules\User\Models\User;
use Modules\User\Models\Verification;
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
     * @param bool|null $autoCompleted
     * @return User|null
     */
    public function register(string $username, string $nickname, string $email, string $password, ?bool $autoCompleted = null): ?User
    {
        $wotlkHasher = app(WotlkHasher::class);

        $email = Str::lower($email);
        $username = Str::upper($username);

        try {
            [$salt, $verifier] = $wotlkHasher->make($username, $password);
        } catch (BindingResolutionException) {
            return null;
        }

        $user = User::create([
            'nickname' => $nickname,
            'email' => $email,
            'password' => Hash::make($password)
        ]);

        $user->assignRole(Role::USER);

        $user->accounts()->create([
            'username' => $username,
            'email' => $email,
            'reg_mail' => $email,
            'salt' => $salt,
            'verifier' => $verifier
        ]);

        $verification = new Verification();
        $verification->user()->associate($user);
        $verification->save();

        $autoCompleted = $autoCompleted ?? (bool)Config::get('auth.verification.auto');

        UserRegistered::dispatch($user, $verification, $autoCompleted);

        if ($autoCompleted) {
            try {
                $this->verify($verification, true);
            } catch (UserAlreadyVerifiedException) {
                // Cannot happen in this case
            }
        }

        return $user;
    }

    /**
     * @param Verification $verification
     * @param bool $autoCompleted
     * @throws UserAlreadyVerifiedException
     */
    public function verify(Verification $verification, bool $autoCompleted = false): void
    {
        $user = $verification->user;

        if ($user->isVerified()) {
            throw new UserAlreadyVerifiedException();
        }

        $verification->update([
            'completed' => true
        ]);

        $user->verifications()->where('completed', false)->delete();

        UserVerified::dispatch($verification, $autoCompleted);
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
        if (false === Auth::attempt(['email' => $email, 'password' => $password], $rememberMe)) {
            return null;
        }

        return Auth::user();
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
     * @param string $email
     * @return bool
     */
    public function forget(string $email): bool
    {
        $user = User::where('email', $email)->first();

        if (null === $user) {
            return false;
        }

        $reminder = $user->reminders()->create();

        UserForgetPassword::dispatch($reminder);

        return true;
    }

    /**
     * @param Reminder $reminder
     * @param string $newPassword
     * @return void
     */
    public function reset(Reminder $reminder, string $newPassword): void
    {
        $reminder->user->update([
            'password' => Hash::make($newPassword)
        ]);

        UserResetPassword::dispatch($reminder->user);

        $reminder->delete();
    }
}
