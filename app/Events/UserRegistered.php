<?php

namespace App\Events;

use App\Abstractions\Events\BaseStoredEvent;
use App\Models\User;
use App\Models\Verification;
use App\Notifications\WelcomeNotification;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

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
