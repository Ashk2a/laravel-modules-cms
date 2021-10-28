<?php

namespace App\Abstractions\Notifications;

use App\Models\Activity;
use App\Models\User;

interface HasDatabaseNotification
{
    /**
     * @param User $notifiable
     * @return array
     */
    public function toDatabase(User $notifiable): array;
}
