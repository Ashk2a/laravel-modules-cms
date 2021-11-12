<?php

namespace Modules\Core\Database\Eloquent\Concerns;

use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\CausesActivity;
use Spatie\Activitylog\Traits\LogsActivity;

trait HasActivities
{
    use LogsActivity, CausesActivity;

    /**
     * We won't log no models events directly.
     *
     * @var array
     */
    protected static array $recordEvents = [];

    /**
     * @return LogOptions
     */
    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults();
    }
}
