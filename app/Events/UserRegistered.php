<?php

namespace App\Events;

use App\Abstractions\Events\BaseStoredEvent;
use App\Models\User;
use App\Models\Verification;
use Illuminate\Database\Eloquent\Model;

class UserRegistered extends BaseStoredEvent
{
    /**
     * @param User $user
     * @param Verification $verification
     * @param bool $autoCompleted
     */
    public function __construct(public User $user, public Verification $verification, public bool $autoCompleted)
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
