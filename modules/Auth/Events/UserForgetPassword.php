<?php

namespace Modules\Auth\Events;

use Illuminate\Database\Eloquent\Model;
use Modules\Auth\Models\Reminder;
use Modules\Auth\Models\User;
use Modules\Core\Events\AbstractEvent;

class UserForgetPassword extends AbstractEvent
{
    /**
     * @param Reminder $reminder
     * @param User|null $causer
     */
    public function __construct(public Reminder $reminder, private ?User $causer = null)
    {
        parent::__construct();
    }

    /**
     * @inheritDoc
     */
    public function subject(): ?Model
    {
        return $this->reminder->user;
    }

    /**
     * @inheritDoc
     */
    public function causer(): ?Model
    {
        return $this->causer;
    }
}
