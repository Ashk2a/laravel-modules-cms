<?php

namespace App\Notifications;

use App\Abstractions\Mail\MarkdownMail;
use App\Abstractions\Notifications\BaseStoredNotification;
use App\Abstractions\Notifications\HasMarkdownMailNotification;
use App\Events\UserRegistered;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use JetBrains\PhpStorm\Pure;

class UserWelcome extends BaseStoredNotification implements HasMarkdownMailNotification
{
    #[Pure] public function __construct(UserRegistered $event)
    {
        parent::__construct($event);
    }

    /**
     * @inerhitDoc
     */
    public function toMail(Model|User $notifiable): MarkdownMail
    {
        $subject = $this->event->verification->completed
            ? trans('emails.user_welcome.subject')
            : trans('emails.user_welcome.subject_with_verification');

        return (new MarkdownMail($subject))
            ->markdown('emails.user_welcome', ['verification' => $this->event->verification]);
    }
}
