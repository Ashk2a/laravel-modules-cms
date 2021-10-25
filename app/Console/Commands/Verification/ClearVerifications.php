<?php

namespace App\Console\Commands\Verification;

use App\Abstractions\Console\Commands\BaseCommand;
use App\Models\Reminder;
use App\Models\Verification;
use Carbon\Carbon;

class ClearVerifications extends BaseCommand
{
    /**
     * @var string
     */
    protected $signature = 'verification:clear';

    /**
     * @var string
     */
    protected $description = 'Clear expired verifications without completed state';

    /**
     * @return int
     */
    public function handle(): int
    {
        Verification::query()
            ->where(
                'expires_at',
                '>=', Carbon::now()
            )
            ->where('completed', false)
            ->delete();

        return self::SUCCESS;
    }
}
