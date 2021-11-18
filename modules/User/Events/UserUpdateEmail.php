<?php

namespace Modules\User\Events;

use Illuminate\Database\Eloquent\Model;
use Modules\Core\Events\AbstractEvent;
use Modules\User\Models\User;

class UserUpdateEmail extends AbstractEvent
{
    /**
     * @param User $user
     * @param string $email
     * @param string $oldEmail
     */
    public function __construct(private User $user, private string $email, private string $oldEmail)
    {
        parent::__construct();
    }

    /**
     * @inheritDoc
     */
    public function subject(): ?Model
    {
        return $this->user;
    }

    /**
     * @inheritDoc
     */
    public function context(): array
    {
        return [
            'old_email' => $this->oldEmail,
            'new_email' => $this->email,
        ];
    }
}
