<?php

namespace App\Abstractions\Events;

use Illuminate\Support\Str;

abstract class BaseEvent
{
    /**
     * @return string
     */
    public function getName(): string
    {
        return Str::snake(class_basename($this));
    }

    protected function notifications(): array
    {
        return [];
    }

    /**
     * @return void
     */
    public function sendNotifications(): void {

    }
}