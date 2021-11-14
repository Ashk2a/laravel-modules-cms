<?php

namespace Modules\Auth\Models;

use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\Pivot;

/**
 * Modules\Auth\Models\Models\UserAccount
 *
 * @method static Builder|UserAccount newModelQuery()
 * @method static Builder|UserAccount newQuery()
 * @method static Builder|UserAccount query()
 * @mixin Eloquent
 */
class UserAccount extends Pivot
{
    protected $connection = 'website';
    protected $table = 'user_accounts';
}
