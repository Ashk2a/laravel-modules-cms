<?php

namespace App\Listeners;

use App\Abstractions\Listeners\BaseEventSubscriber;
use App\Events\UserLogin;
use App\Events\UserLoginFailed;
use App\Events\UserRegistered;
use App\Events\UserVerified;
use App\Notifications\UserVerificationSucceed;
use App\Notifications\UserWelcome;

class UserEventSubscriber extends BaseEventSubscriber
{
    protected array $listeners = [
        UserRegistered::class => 'onUserRegistered',
        UserLogin::class => 'onUserLogin',
        UserLoginFailed::class => 'onUserLoginFailed',
        UserVerified::class => 'onUserVerified'
    ];

    /**
     * @param UserRegistered $event
     * @return void
     */
    public function onUserRegistered(UserRegistered $event): void
    {
        $event->user->notify(new UserWelcome($event));
    }

    /**
     * @param UserLogin $event
     * @return void
     */
    public function onUserLogin(UserLogin $event): void
    {
    }

    /**
     * @param UserLoginFailed $event
     * @return void
     */
    public function onUserLoginFailed(UserLoginFailed $event): void
    {
    }

    /**
     * @param UserVerified $event
     * @return void
     */
    public function onUserVerified(UserVerified $event): void
    {
        if (false === $event->autoCompleted) {
            $event->verification->user->notify(new UserVerificationSucceed($event));
        }
    }
}
