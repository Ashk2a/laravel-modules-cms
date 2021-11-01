<?php

namespace App\Models;

use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;
use Illuminate\Support\Collection;
use Spatie\Activitylog\Models\Activity as SpatieActivity;

/**
 * App\Models\Activity
 *
 * @property int $id
 * @property string|null $log_name
 * @property string $event
 * @property string|null $description
 * @property string|null $subject_type
 * @property int|null $subject_id
 * @property string|null $causer_type
 * @property int|null $causer_id
 * @property string|null $batch_uuid
 * @property Collection $properties
 * @property Collection $context
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property-read Model|Eloquent $causer
 * @property-read Collection $changes
 * @property-read Model|Eloquent $subject
 * @method static Builder|Activity causedBy(Model $causer)
 * @method static Builder|Activity forBatch(string $batchUuid)
 * @method static Builder|Activity forEvent(string $event)
 * @method static Builder|Activity forSubject(Model $subject)
 * @method static Builder|Activity hasBatch()
 * @method static Builder|Activity inLog($logNames)
 * @method static Builder|Activity newModelQuery()
 * @method static Builder|Activity newQuery()
 * @method static Builder|Activity query()
 * @mixin Eloquent
 */
class Activity extends SpatieActivity
{
    protected $casts = [
        'properties' => 'collection',
        'context' => 'collection'
    ];
}
