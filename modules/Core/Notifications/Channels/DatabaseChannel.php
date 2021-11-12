<?php

namespace Modules\Core\Notifications\Channels;

use Exception;
use Illuminate\Notifications\Channels\DatabaseChannel as LaravelDatabaseChannel;
use Illuminate\Notifications\Notification as LaravelNotification;
use Modules\Core\Notifications\AbstractNotification;

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
        if (false === $notification instanceof AbstractNotification) {
            throw new Exception('Only use class based on `' . AbstractNotification::class . '`.');
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
