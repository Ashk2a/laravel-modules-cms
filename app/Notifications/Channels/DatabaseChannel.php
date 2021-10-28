<?php

namespace App\Notifications\Channels;

use App\Abstractions\Notifications\BaseNotification;
use Exception;
use Illuminate\Notifications\Channels\DatabaseChannel as LaravelDatabaseChannel;
use Illuminate\Notifications\Notification as LaravelNotification;

class DatabaseChannel extends LaravelDatabaseChannel
{
    /**
     * @param mixed $notifiable
     * @param LaravelNotification $notification
     * @return array
     * @throws Exception
     */
    public function buildPayload($notifiable, LaravelNotification $notification): array
    {
        if (false === $notification instanceof BaseNotification) {
            throw new Exception('Only use class based on `' . BaseNotification::class . '`.');
        }

        return [
            'activity_id' => $notification?->event?->activity?->id,
            'name' => $notification->getName(),
            'channels' => $notification->getChannels(),
            'context' => $this->getData($notifiable, $notification),
            'is_readable' => $notification->isReadable(),
            'read_at' => null,
        ];
    }
}
