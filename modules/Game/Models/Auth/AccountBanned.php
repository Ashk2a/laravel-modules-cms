<?php

namespace Modules\Game\Models\Auth;

use Illuminate\Database\Eloquent\Model;

class AccountBanned extends Model
{
    /**
     * @var string
     */
    protected $connection = 'auth';

    /**
     * @var string
     */
    protected $table = 'account_banned';

    /**
     * @var string[]
     */
    protected $primaryKey = ['id', 'bandate'];
}
