<?php

namespace App\Abstractions\Notifications;

use App\Abstractions\Events\BaseStoredEvent;
use Illuminate\Bus\Queueable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Str;

abstract class BaseStoredNotification extends Notification implements HasDatabaseNotification
{
    use Queueable;

    /**
     * @var array
     */
    public const NOTIFICATION_TYPES = [
        HasDatabaseNotification::class => 'database',
        HasMarkdownMailNotification::class => 'mail'
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
        $name = Str::snake(class_basename($this));

        if (Str::endsWith($name, '_notification')) {
            return Str::substr($name, 0, -Str::length('_notification'));
        }

        return $name;
    }

    /**
     * @return array
     */
    public function getChannels(): array
    {
        return array_values($this->via());
    }

    /**
     * @param Model|null $notifiable
     * @return array
     */
    public function via(?Model $notifiable = null): array
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
    public function toDatabase(Model $notifiable): array
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
