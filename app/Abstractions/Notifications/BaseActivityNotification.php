<?php

namespace App\Abstractions\Notifications;

use App\Abstractions\Events\BaseStoredEvent;
use App\Models\User;

abstract class BaseActivityNotification extends BaseNotification implements HasDatabaseNotification
{
    public function __construct(public BaseStoredEvent $event)
    {
    }

    /**
     * @inerhitDoc
     */
    public function toDatabase(User $notifiable): array
    {
        return array_merge([
            'activity_id' => $this->event->activity->id
        ], $this->toDatabaseData($notifiable));
    }

    /**
     * @param User $notifiable
     * @return array
     */
    abstract public function toDatabaseData(User $notifiable): array;
}
