<?php

namespace Modules\User\Listeners;

use Modules\Core\Listeners\AbstractEventSubscriber;
use Modules\User\Events\UserUpdateEmail;
use Modules\User\Events\UserUpdateNickname;
use Modules\User\Events\UserUpdatePassword;

class UserEventSubscriber extends AbstractEventSubscriber
{
    /**
     * @var array|string[]
     */
    protected array $listeners = [
        UserUpdateNickname::class,
        UserUpdateEmail::class,
        UserUpdatePassword::class
    ];
}
