<?php

namespace App\Abstractions\Events;

use App\Models\Activity;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Str;

abstract class BaseStoredEvent
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * @var Activity
     */
    public Activity $activity;

    public function __construct()
    {
        $this->activity = $this->buildActivity();
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        return Str::snake(class_basename($this));
    }

    /**
     * @return Activity
     */
    private function buildActivity(): Activity
    {
        $activity = new Activity();
        $activity->fill([
            'log_name' => 'stored_event',
            'event' => $this->getName(),
            'context' => $this->context()
        ]);

        $activity->subject()->associate($this->subject());

        if (null !== $this->causer()) {
            $activity->causer()->associate($this->causer());
        }

        $activity->save();

        return $activity;
    }

    /**
     * @return array
     */
    public function context(): array
    {
        return [];
    }

    /**
     * @return Model
     */
    abstract public function subject(): Model;

    /**
     * @return Model|null
     */
    public function causer(): ?Model
    {
        return null;
    }
}
