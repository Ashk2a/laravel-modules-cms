<?php

namespace App\Abstractions\Notifications;

use App\Models\User;

interface HasDatabaseNotification
{
    public function toDatabase(User $notifiable): array;
}
