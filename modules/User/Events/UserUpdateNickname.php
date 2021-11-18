<?php

namespace Modules\User\Events;

use Illuminate\Database\Eloquent\Model;
use Modules\Core\Events\AbstractEvent;
use Modules\User\Models\User;

class UserUpdateNickname extends AbstractEvent
{
    /**
     * @param User $user
     * @param string $nickname
     * @param string $oldNickname
     */
    public function __construct(private User $user, private string $nickname, private string $oldNickname)
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
            'old_nickname' => $this->oldNickname,
            'new_nickname' => $this->nickname,
        ];
    }
}
