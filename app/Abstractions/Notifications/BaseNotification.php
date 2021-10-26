<?php

namespace App\Abstractions\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notification;

abstract class BaseNotification extends Notification
{
    use Queueable;

    protected const DATABASE = 'database';
    protected const MAIL = 'mail';
    protected const DISCORD = 'discord';

    /**
     * @param Model $notifiable
     * @return array
     */
    abstract public function via(Model $notifiable): array;
}
