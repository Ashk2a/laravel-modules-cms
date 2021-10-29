<?php

namespace App\Events;

use App\Abstractions\Events\BaseStoredEvent;
use App\Models\Reminder;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;

class UserForgetPassword extends BaseStoredEvent
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
