<?php

namespace App\Abstractions\Listeners;

use Illuminate\Contracts\Events\Dispatcher;

abstract class BaseEventSubscriber
{
    protected array $listeners = [];

    /**
     * @param Dispatcher $dispatcher
     * @return array
     */
    public function subscribe(Dispatcher $dispatcher): array
    {
        return $this->listeners;
    }
}
