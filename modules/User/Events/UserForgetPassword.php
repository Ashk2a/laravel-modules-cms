<?php

namespace Modules\User\Events;

use Illuminate\Database\Eloquent\Model;
use Modules\User\Models\Reminder;
use Modules\User\Models\User;
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
