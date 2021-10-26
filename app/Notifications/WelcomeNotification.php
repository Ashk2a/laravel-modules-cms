<?php

namespace App\Notifications;

use App\Abstractions\Mail\MarkdownMail;
use App\Abstractions\Notifications\BaseNotification;
use App\Abstractions\Notifications\HasDatabaseNotification;
use App\Abstractions\Notifications\HasMailNotification;
use App\Models\User;
use App\Models\Verification;

class WelcomeNotification extends BaseNotification implements HasMailNotification, HasDatabaseNotification
{
    public function __construct(private Verification $verification)
    {
    }

    /**
     * @inerhitDoc
     */
    public function toDatabase(User $notifiable): array
    {
        return [
            'verification_id' => $this->verification->id,
            'completed' => $this->verification->completed
        ];
    }

    /**
     * @inerhitDoc
     */
    public function toMail(User $notifiable): MarkdownMail
    {
        $subject = $this->verification->completed
            ? trans('emails.user_welcome.subject')
            : trans('emails.user_welcome.subject_with_verification');

        return (new MarkdownMail($subject))
            ->markdown('emails.user_welcome', ['verification' => $this->verification]);
    }
}
