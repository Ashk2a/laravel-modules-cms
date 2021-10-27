<?php

namespace App\Abstractions\Events;

use Illuminate\Database\Eloquent\Model;

abstract class BaseStoredEvent extends BaseEvent
{
    public function __construct() {

    }

    /**
     * @return Model
     */
    abstract public function subject(): Model;

    /**
     * @return Model|null
     */
    public function causer(): ?Model
    {
        return null;
    }

    public function context(): array
    {
        return [];
    }

    private function saveAsActivity(): void
    {

    }
}
