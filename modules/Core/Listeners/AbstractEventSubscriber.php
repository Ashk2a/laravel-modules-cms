<?php

namespace Modules\Core\Listeners;

use Illuminate\Contracts\Events\Dispatcher;

abstract class AbstractEventSubscriber
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
