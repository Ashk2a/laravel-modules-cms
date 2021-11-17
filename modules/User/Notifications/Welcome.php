<?php

namespace Modules\User\Notifications;

use Illuminate\Database\Eloquent\Model;
use Modules\User\Events\UserRegistered;
use Modules\User\Models\User;
use Modules\Core\Mail\MarkdownMail;
use Modules\Core\Notifications\AbstractNotification;
use Modules\Core\Notifications\HasMarkdownMailNotification;

class Welcome extends AbstractNotification implements HasMarkdownMailNotification
{
    public function __construct(public UserRegistered $event)
    {
    }

    /**
     * @inerhitDoc
     */
    public function toMail(Model|User $notifiable): MarkdownMail
    {
        $subject = $this->event->autoCompleted
            ? trans('user::email.welcome.subject')
            : trans('user::email.welcome.subject_with_verification');

        return MarkdownMail::create()
            ->subject($subject)
            ->markdown('user::emails.welcome', [
                'completed' => $this->event->autoCompleted,
                'url' => $this->event->verification->getUrl()
            ]);
    }
}
