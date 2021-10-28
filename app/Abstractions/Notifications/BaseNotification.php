<?php

namespace App\Abstractions\Notifications;

use App\Abstractions\Events\BaseStoredEvent;
use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Str;

abstract class BaseNotification extends Notification implements HasDatabaseNotification
{
    use Queueable;

    /**
     * @var array
     */
    private const NOTIFICATION_TYPES = [
        HasDatabaseNotification::class => 'database',
        HasMailNotification::class => 'mail'
    ];

    /**
     * @param BaseStoredEvent $event
     */
    public function __construct(public BaseStoredEvent $event)
    {
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        $snakeClass = Str::snake(class_basename($this));

        if (Str::endsWith($snakeClass, '_notification')) {
            return Str::substr($snakeClass, 0, -Str::length('_notification'));
        }

        return $snakeClass;
    }

    /**
     * @return array
     */
    public function getChannels(): array
    {
        return array_values($this->via());
    }

    /**
     * @param User|null $notifiable
     * @return array
     */
    public function via(?User $notifiable = null): array
    {
        $via = [];

        foreach (self::NOTIFICATION_TYPES as $clazz => $pipeName) {
            if (is_subclass_of($this, $clazz)) {
                $via[] = $pipeName;
            }
        }

        return $via;
    }

    /**
     * @inerhitDoc
     */
    public function toDatabase(User $notifiable): array
    {
        return [];
    }

    /**
     * @return bool
     */
    public function isReadable(): bool
    {
        return true;
    }
}
