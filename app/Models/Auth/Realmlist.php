<?php

namespace App\Models\Auth;

use App\Models\Server;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Realmlist extends Model
{
    /**
     * @var bool
     */
    public $timestamps = false;

    /**
     * @var string
     */
    protected $connection = 'auth';

    /**
     * @var string
     */
    protected $table = 'realmlist';

    /**
     * @var string[]
     */
    protected $fillable = [
        'name',
        'address',
        'localAddress',
        'localSubnetMask',
        'port',
        'icon',
        'flag',
        'timezone',
        'allowedSecurityLevel'
    ];

    /**
     * @return HasOne
     */
    public function server(): HasOne
    {
        return $this->HasOne(Server::class);
    }
}
