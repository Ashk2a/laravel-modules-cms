<?php

namespace App\Events;

use App\Abstractions\Events\BaseStoredEvent;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;

class UserLogin extends BaseStoredEvent
{
    public function __construct(public string $guard, public User $user, public bool $remember)
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
            'guard' => $this->guard,
            'remember' => $this->remember
        ];
    }
}
