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
     */
    public function __construct(public User $user, public Verification $verification)
    {
        parent::__construct();
    }

    /**
     * @inheritDoc
     */
    public function subject(): Model
    {
        return $this->user;
    }

    /**
     * @inheritDoc
     */
    public function context(): array
    {
        return [
            'verification' => $this->verification->only(['id', 'completed']),
        ];
    }
}
