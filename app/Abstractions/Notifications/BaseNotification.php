<?php

namespace App\Abstractions\Notifications;

use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;

abstract class BaseNotification extends Notification
{
    use Queueable;

    private const NOTIFICATION_TYPES = [
        HasDatabaseNotification::class => 'database',
        HasMailNotification::class => 'mail'
    ];

    /**
     * @param User $notifiable
     * @return array
     */
    public function via(User $notifiable): array
    {
        $via = [];

        foreach (self::NOTIFICATION_TYPES as $clazz => $pipeName) {
            if (is_subclass_of($this, $clazz)) {
                $via[] = $pipeName;
            }
        }

        return $via;
    }

    /**
     * @param User $notifiable
     * @return array
     */
    abstract public function toDatabase(User $notifiable): array;
}
