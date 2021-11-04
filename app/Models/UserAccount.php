<?php

namespace App\Models;

use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\Pivot;

/**
 * App\Models\UserAccount
 *
 * @method static Builder|UserAccount newModelQuery()
 * @method static Builder|UserAccount newQuery()
 * @method static Builder|UserAccount query()
 * @mixin Eloquent
 */
class UserAccount extends Pivot
{
}
