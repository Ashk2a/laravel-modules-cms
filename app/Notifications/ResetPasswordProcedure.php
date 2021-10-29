<?php

namespace App\Notifications;

use App\Abstractions\Mail\MarkdownMail;
use App\Abstractions\Notifications\BaseStoredNotification;
use App\Abstractions\Notifications\HasMarkdownMailNotification;
use App\Events\UserForgetPassword;
use Illuminate\Database\Eloquent\Model;

class ResetPasswordProcedure extends BaseStoredNotification implements HasMarkdownMailNotification
{
    /**
     * @param UserForgetPassword $event
     */
    public function __construct(public UserForgetPassword $event)
    {
    }


    /**
     * @inheritDoc
     */
    public function toMail(Model $notifiable): MarkdownMail
    {
        return (new MarkdownMail(trans('emails.reset_password_procedure.subject')))
            ->markdown('emails.reset_password_procedure', [
                'url' => $this->event->reminder->getUrl()
            ]);
    }
}
