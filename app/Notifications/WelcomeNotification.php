<?php

namespace App\Notifications;

use App\Abstractions\Mail\MarkdownMail;
use App\Abstractions\Notifications\BaseActivityNotification;
use App\Abstractions\Notifications\HasMailNotification;
use App\Events\UserRegistered;
use App\Models\User;
use JetBrains\PhpStorm\Pure;

class WelcomeNotification extends BaseActivityNotification implements HasMailNotification
{
    #[Pure] public function __construct(UserRegistered $event)
    {
        parent::__construct($event);
    }

    /**
     * @inerhitDoc
     */
    public function toDatabaseData(User $notifiable): array
    {
        return [
            'verification_id' => $this->event->verification->id
        ];
    }

    /**
     * @inerhitDoc
     */
    public function toMail(User $notifiable): MarkdownMail
    {
        $subject = $this->event->verification->completed
            ? trans('emails.user_welcome.subject')
            : trans('emails.user_welcome.subject_with_verification');

        return (new MarkdownMail($subject))
            ->markdown('emails.user_welcome', ['verification' => $this->event->verification]);
    }
}
