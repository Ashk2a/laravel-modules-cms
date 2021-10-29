<?php

namespace App\Abstractions\Notifications;

use App\Abstractions\Mail\MarkdownMail;
use Illuminate\Database\Eloquent\Model;

interface HasMarkdownMailNotification
{
    /**
     * @param Model $notifiable
     * @return MarkdownMail
     */
    public function toMail(Model $notifiable): MarkdownMail;
}
