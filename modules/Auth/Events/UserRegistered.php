<?php

namespace Modules\Auth\Events;

use Illuminate\Database\Eloquent\Model;
use Modules\Auth\Models\User;
use Modules\Auth\Models\Verification;
use Modules\Core\Events\AbstractEvent;

class UserRegistered extends AbstractEvent
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
