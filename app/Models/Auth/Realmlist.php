<?php

namespace App\Models\Auth;

use App\Models\Server;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Realmlist extends Model
{
    protected $connection = 'auth';

    protected $table = 'realmlist';

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

    public function server(): BelongsTo
    {
        return $this->setConnection('website')->belongsTo(Server::class);
    }
}
