<?php

namespace Modules\Auth\Notifications;

use Illuminate\Database\Eloquent\Model;
use Modules\Auth\Events\UserRegistered;
use Modules\Auth\Models\User;
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
            ? trans('auth::email.welcome.subject')
            : trans('auth::email.welcome.subject_with_verification');

        return (new MarkdownMail($subject))
            ->markdown('auth::emails.welcome', [
                'completed' => $this->event->autoCompleted,
                'url' => $this->event->verification->getUrl()
            ]);
    }
}
