<?php

namespace Modules\User\Events;

use Illuminate\Database\Eloquent\Model;
use Modules\Core\Events\AbstractEvent;
use Modules\User\Models\User;

class UserUpdatePassword extends AbstractEvent
{
    /**
     * @param User $user
     */
    public function __construct(private User $user)
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
}
