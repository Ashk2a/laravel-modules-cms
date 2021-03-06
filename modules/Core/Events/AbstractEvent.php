<?php

namespace Modules\Core\Events;

use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Str;
use Modules\Core\Models\Activity;
use Modules\User\Models\User;

abstract class AbstractEvent
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
     * @return Model|null
     */
    public function subject(): ?Model
    {
        return null;
    }

    /**
     * @return Model|null
     */
    public function causer(): ?Model
    {
        /**
         * @var ?User $causer
         */
        $causer = auth()->user();

        if ((null !== $causer) && $this->subject() instanceof User && $this->subject()->id === $causer->getAuthIdentifier()) {
            return null;
        }

        return $causer;
    }
}
