<?php

namespace App\Events;

use App\Abstractions\Events\BaseStoredEvent;
use App\Models\Verification;
use Illuminate\Database\Eloquent\Model;

class UserVerified extends BaseStoredEvent
{
    /**
     * @param Verification $verification
     * @param bool $autoCompleted
     */
    public function __construct(public Verification $verification, public bool $autoCompleted)
    {
        parent::__construct();
    }

    /**
     * @inheritDoc
     */
    public function subject(): ?Model
    {
        return $this->verification->user;
    }

    /**
     * @inheritDoc
     */
    public function context(): array
    {
        return [
            'email' => $this->verification->user->email,
            'auto_completed' => $this->autoCompleted
        ];
    }
}
