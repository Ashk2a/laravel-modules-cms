<?php

namespace Modules\Auth\Events;

use Illuminate\Database\Eloquent\Model;
use Modules\Auth\Models\Verification;
use Modules\Core\Events\AbstractEvent;

class UserVerified extends AbstractEvent
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
