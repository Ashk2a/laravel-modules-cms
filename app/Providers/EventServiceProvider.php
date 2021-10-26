<?php

namespace App\Providers;

use App\Listeners\UserEventSubscriber;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * @var array
     */
    protected $listen = [];

    /**
     * @var array
     */
    protected $subscribe = [
        UserEventSubscriber::class
    ];

    /**
     * @return void
     */
    public function boot(): void
    {
    }
}
