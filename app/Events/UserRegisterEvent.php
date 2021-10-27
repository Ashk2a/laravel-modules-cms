<?php

namespace App\Events;

use App\Abstractions\Events\BaseStoredEvent;
use App\Models\User;
use App\Models\Verification;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class UserRegisterEvent extends BaseStoredEvent
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

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
}
