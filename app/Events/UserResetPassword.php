<?php

namespace App\Events;

use App\Abstractions\Events\BaseStoredEvent;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;

class UserResetPassword extends BaseStoredEvent
{
    public function __construct(public User $user)
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
