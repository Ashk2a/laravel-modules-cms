<?php

namespace App\Listeners;

use App\Abstractions\Listeners\BaseEventSubscriber;
use App\Events\UserRegistered;
use App\Notifications\UserWelcome;

class UserEventSubscriber extends BaseEventSubscriber
{
    protected array $listeners = [
        UserRegistered::class => 'onUserRegistered'
    ];

    /**
     * @param UserRegistered $event
     */
    public function onUserRegistered(UserRegistered $event): void
    {
        $event->user->notify(new UserWelcome($event));
    }
}
