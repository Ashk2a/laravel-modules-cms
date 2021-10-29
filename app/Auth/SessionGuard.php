<?php

namespace App\Auth;

use App\Events\UserLogin;
use App\Events\UserLoginFailed;
use App\Exceptions\Auth\UserNotVerifiedException;
use App\Models\User;
use Illuminate\Auth\SessionGuard as LaravelSessionGuard;
use Illuminate\Contracts\Auth\Authenticatable;

class SessionGuard extends LaravelSessionGuard
{
    /**
     * @param Authenticatable|User $user
     * @param false $remember
     * @throws UserNotVerifiedException
     */
    public function login(Authenticatable|User $user, $remember = false): void
    {
        if (false === $user->isVerified()) {
            $this->fireLoginFailedEvent($user, [], UserLoginFailed::NOT_VERIFIED_CAUSE);

            throw new UserNotVerifiedException();
        }

        parent::login($user, $remember);
    }

    /**
     * Attempt to authenticate a user using the given credentials.
     *
     * @param array $credentials
     * @param bool $remember
     * @return bool
     * @throws UserNotVerifiedException
     */
    public function attempt(array $credentials = [], $remember = false): bool
    {
        $this->lastAttempted = $user = $this->provider->retrieveByCredentials($credentials);

        if ($this->hasValidCredentials($user, $credentials)) {
            $this->login($user, $remember);

            return true;
        }

        $this->fireFailedEvent($user, $credentials);

        return false;
    }

    /**
     * @param Authenticatable|User $user
     * @param bool $remember
     * @return void
     */
    public function fireLoginEvent($user, $remember = false): void
    {
        event(new UserLogin($this->name, $user, $remember));
    }

    /**
     * @param User|null $user
     * @param array $credentials
     * @param string $cause
     */
    public function fireLoginFailedEvent(
        ?User  $user,
        array  $credentials = [],
        string $cause = UserLoginFailed::WRONG_CREDENTIALS_CAUSE): void
    {
        $context = [
            'ip' => $this?->request?->getClientIp()
        ];

        event(new UserLoginFailed($this->name, $user, $credentials, $context, $cause));
    }

    /**
     * @param Authenticatable|User|null $user
     * @param array $credentials
     */
    public function fireFailedEvent($user, array $credentials = []): void
    {
        $this->fireLoginFailedEvent($user, $credentials);
    }
}
