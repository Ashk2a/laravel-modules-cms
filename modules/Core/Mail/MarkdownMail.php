<?php

namespace Modules\Core\Mail;

use Illuminate\Notifications\Messages\MailMessage;
use JetBrains\PhpStorm\Pure;

class MarkdownMail extends MailMessage
{
    /**
     * @return MarkdownMail
     */
    #[Pure] public static function create(): MarkdownMail
    {
        return new self();
    }

    /**
     * @param string $subject
     * @return $this
     */
    public function subject($subject): self
    {
        $this->viewData['subject'] = $subject;

        return parent::subject($subject);
    }

    /**
     * @param string $view
     * @param array $data
     * @return $this
     */
    public function markdown($view, array $data = []): self
    {
        $data = array_merge($this->viewData, $data);

        return parent::markdown($view, $data);
    }
}
