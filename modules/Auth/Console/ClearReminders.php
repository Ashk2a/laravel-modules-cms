<?php

namespace Modules\Auth\Console;

use Carbon\Carbon;
use Modules\Auth\Models\Reminder;
use Modules\Core\Console\AbstractCommand;

class ClearReminders extends AbstractCommand
{
    /**
     * @var string
     */
    protected $signature = 'reminders:clear';

    /**
     * @var string
     */
    protected $description = 'Clear expired reminders';

    /**
     * @return int
     */
    public function handle(): int
    {
        Reminder::query()
            ->where(
                'expires_at',
                '>=', Carbon::now()
            )
            ->delete();

        return self::SUCCESS;
    }
}
