<?php

namespace Modules\Auth\Notifications;

use Modules\Auth\Events\UserForgetPassword;
use Illuminate\Database\Eloquent\Model;
use Modules\Core\Mail\MarkdownMail;
use Modules\Core\Notifications\AbstractNotification;
use Modules\Core\Notifications\HasMarkdownMailNotification;

class ResetPasswordProcedure extends AbstractNotification implements HasMarkdownMailNotification
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
            ->markdown('auth::emails.reset_password_procedure', [
                'url' => $this->event->reminder->getUrl()
            ]);
    }
}
