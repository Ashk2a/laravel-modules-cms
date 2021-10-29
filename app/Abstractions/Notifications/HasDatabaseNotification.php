<?php

namespace App\Abstractions\Notifications;

use Illuminate\Database\Eloquent\Model;

interface HasDatabaseNotification
{
    /**
     * @param Model $notifiable
     * @return array
     */
    public function toDatabase(Model $notifiable): array;

    /**
     * @return bool
     */
    public function isReadable(): bool;
}
