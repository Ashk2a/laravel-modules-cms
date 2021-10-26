<?php

namespace App\Notifications;

use App\Abstractions\Mail\MarkdownMail;
use App\Abstractions\Notifications\BaseNotification;
use App\Models\User;
use App\Models\Verification;
use Illuminate\Database\Eloquent\Model;

class UserWelcomeNotification extends BaseNotification
{
    public function __construct(private Verification $verification)
    {
    }

    /**
     * @param User $user
     * @return array
     */
    public function toDatabase($notifiable): array
    {
        return [
            'verification_id' => $this->verification->id,
            'completed' => $this->verification->completed
        ];
    }

    /**
     * @param User $user
     * @return MarkdownMail
     */
    public function toMail(User $user): MarkdownMail
    {
        $subject = $this->verification->completed
            ? trans('emails.user_welcome.subject')
            : trans('emails.user_welcome.subject_with_verification');

        return (new MarkdownMail($subject))
            ->markdown('emails.user_welcome', ['verification' => $this->verification]);
    }

    /**
     * @inerhitDoc
     */
    public function via(Model $notifiable): array
    {
        return [
            self::MAIL,
            self::DATABASE
        ];
    }
}
