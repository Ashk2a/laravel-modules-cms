<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Notifications\DatabaseNotification;

class Notification extends DatabaseNotification
{
    public const DATA_ACTIVITY_KEY = 'activity_id';

    /**
     * @inerhitDoc
     */
    public static function boot(): void
    {
        parent::boot();

        self::creating(function (Notification $model) {
            $activityId = $model?->data[self::DATA_ACTIVITY_KEY] ?? null;

            if (null !== $activityId) {
                $newData = $model->data;
                unset($newData[self::DATA_ACTIVITY_KEY]);

                $model->data = $newData;
                $model->activity_id = $activityId;
            }
        });
    }

    /**
     * @return BelongsTo
     */
    public function activity(): BelongsTo
    {
        return $this->belongsTo(Activity::class);
    }
}
