<?php

namespace App\Console\Commands\Reminder;

use App\Abstractions\Console\Commands\BaseCommand;
use App\Models\Reminder;
use Carbon\Carbon;

class ClearReminders extends BaseCommand
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
