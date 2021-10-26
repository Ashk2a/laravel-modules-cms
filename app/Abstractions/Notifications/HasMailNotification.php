<?php

namespace App\Abstractions\Notifications;

use App\Abstractions\Mail\MarkdownMail;
use App\Models\User;

interface HasMailNotification
{
    public function toMail(User $notifiable): MarkdownMail;
}
