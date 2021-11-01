<?php

namespace App\Models;

use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Notifications\DatabaseNotification;
use Illuminate\Notifications\DatabaseNotificationCollection;
use Illuminate\Support\Carbon;
use Illuminate\Support\Collection;

/**
 * App\Models\Notification
 *
 * @property int $id
 * @property string $name
 * @property int|null $activity_id
 * @property string $notifiable_type
 * @property int $notifiable_id
 * @property Collection $channels
 * @property Collection $context
 * @property bool $is_readable
 * @property Carbon|null $read_at
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property-read Activity|null $activity
 * @property-read Model|Eloquent $notifiable
 * @method static DatabaseNotificationCollection|static[] all($columns = ['*'])
 * @method static DatabaseNotificationCollection|static[] get($columns = ['*'])
 * @method static Builder|Notification newModelQuery()
 * @method static Builder|Notification newQuery()
 * @method static Builder|Notification query()
 * @method static Builder|DatabaseNotification read()
 * @method static Builder|DatabaseNotification unread()
 * @mixin Eloquent
 */
class Notification extends DatabaseNotification
{
    /**
     * @var array
     */
    protected $casts = [
        'context' => 'collection',
        'channels' => 'collection',
        'read_at' => 'datetime',
    ];

    /**
     * @return BelongsTo
     */
    public function activity(): BelongsTo
    {
        return $this->belongsTo(Activity::class);
    }
}
