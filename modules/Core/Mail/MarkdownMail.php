<?php

namespace Modules\Core\Mail;

use Illuminate\Notifications\Messages\MailMessage;

class MarkdownMail extends MailMessage
{
    public function __construct(string $subject) {
        $this->subject($subject);
        $this->viewData['subject'] = $subject;
    }
}
