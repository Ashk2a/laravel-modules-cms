<?php

namespace Modules\Core\Notifications;

use Modules\Core\Mail\MarkdownMail;
use Illuminate\Database\Eloquent\Model;

interface HasMarkdownMailNotification
{
    /**
     * @param Model $notifiable
     * @return MarkdownMail
     */
    public function toMail(Model $notifiable): MarkdownMail;
}
