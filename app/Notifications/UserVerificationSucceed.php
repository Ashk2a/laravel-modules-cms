<?php

namespace App\Notifications;

use App\Abstractions\Mail\MarkdownMail;
use App\Abstractions\Notifications\BaseStoredNotification;
use App\Abstractions\Notifications\HasMarkdownMailNotification;
use App\Events\UserVerified;
use Illuminate\Database\Eloquent\Model;

class UserVerificationSucceed extends BaseStoredNotification implements HasMarkdownMailNotification
{
    public function __construct(public UserVerified $event)
    {
    }

    public function toMail(Model $notifiable): MarkdownMail
    {
        return (new MarkdownMail(trans('emails.user_verification_succeed.subject')))
            ->markdown('emails.user_verification_succeed');
    }
}
