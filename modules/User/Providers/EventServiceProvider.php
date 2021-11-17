<?php

namespace Modules\User\Providers;

use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Modules\User\Listeners\AuthEventSubscriber;

class EventServiceProvider extends ServiceProvider
{
    /**
     * @var array
     */
    protected $subscribe = [
        AuthEventSubscriber::class
    ];
}
