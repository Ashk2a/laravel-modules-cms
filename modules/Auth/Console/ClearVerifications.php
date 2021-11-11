<?php

namespace Modules\Auth\Console;

use Carbon\Carbon;
use Modules\Auth\Models\Verification;
use Modules\Core\Console\AbstractCommand;

class ClearVerifications extends AbstractCommand
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
