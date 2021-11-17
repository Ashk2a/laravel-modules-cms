<?php

namespace Modules\Auth\Notifications;

use Illuminate\Database\Eloquent\Model;
use Modules\Auth\Events\UserVerified;
use Modules\Core\Mail\MarkdownMail;
use Modules\Core\Notifications\AbstractNotification;
use Modules\Core\Notifications\HasMarkdownMailNotification;

class VerificationSucceed extends AbstractNotification implements HasMarkdownMailNotification
{
    public function __construct(public UserVerified $event)
    {
    }

    public function toMail(Model $notifiable): MarkdownMail
    {
        return MarkdownMail::create()
            ->subject(trans('auth::email.verification_succeed.subject'))
            ->markdown('auth::emails.verification_succeed');
    }
}
