<?php

namespace Modules\User\Events;

use Illuminate\Database\Eloquent\Model;
use Modules\User\Models\User;
use Modules\Core\Events\AbstractEvent;

class UserResetPassword extends AbstractEvent
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
