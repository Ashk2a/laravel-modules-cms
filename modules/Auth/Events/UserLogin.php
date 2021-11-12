<?php

namespace Modules\Auth\Events;

use Illuminate\Database\Eloquent\Model;
use Modules\Auth\Models\User;
use Modules\Core\Events\AbstractEvent;

class UserLogin extends AbstractEvent
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
