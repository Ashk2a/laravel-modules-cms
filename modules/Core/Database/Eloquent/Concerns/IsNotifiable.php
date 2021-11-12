<?php

namespace Modules\Core\Database\Eloquent\Concerns;

use Modules\Core\Models\Notification;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Notifications\Notifiable;

trait IsNotifiable
{
    use Notifiable;

    /**
     * Get the entity's notifications.
     *
     * @return MorphMany
     */
    public function notifications(): MorphMany
    {
        return $this->morphMany(Notification::class, 'notifiable')->orderBy('created_at', 'desc');
    }

    /**
     * @param null $notification
     * @return MorphMany
     */
    public function routeNotificationForDatabase($notification = null): MorphMany {
        return $this->notifications();
    }
}
