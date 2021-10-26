<?php

namespace App\Abstractions\Listeners;

use Illuminate\Contracts\Events\Dispatcher;

abstract class BaseEventSubscriber
{
    /**
     * @param Dispatcher $dispatcher
     * @return array
     */
    abstract public function subscribe(Dispatcher $dispatcher): array;
}
