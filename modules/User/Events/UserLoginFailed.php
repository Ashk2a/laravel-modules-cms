<?php

namespace Modules\User\Events;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;
use Modules\User\Models\User;
use Modules\Core\Events\AbstractEvent;

class UserLoginFailed extends AbstractEvent
{
    public const NOT_VERIFIED_CAUSE = 'not_verify';
    public const WRONG_CREDENTIALS_CAUSE = 'wrong_credentials';

    /**
     * @param string $guard
     * @param User|null $user
     * @param array $credentials
     * @param array $context
     * @param string $cause
     */
    public function __construct(
        public string $guard,
        public ?User  $user = null,
        public array  $credentials = [],
        public array  $context = [],
        public string $cause = self::WRONG_CREDENTIALS_CAUSE
    )
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
            'cause' => $this->cause,
            'email' => $this?->user?->email ?? Arr::get($this->credentials, 'email')
        ];
    }
}
