<?php

namespace App\Notifications;

use App\Abstractions\Mail\MarkdownMail;
use App\Abstractions\Notifications\BaseStoredNotification;
use App\Abstractions\Notifications\HasMarkdownMailNotification;
use App\Events\UserRegistered;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;

class UserWelcome extends BaseStoredNotification implements HasMarkdownMailNotification
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
            ? trans('emails.user_welcome.subject')
            : trans('emails.user_welcome.subject_with_verification');

        return (new MarkdownMail($subject))
            ->markdown('emails.user_welcome', [
                'completed' => $this->event->autoCompleted,
                'url' => $this->event->verification->getUrl()
            ]);
    }
}
