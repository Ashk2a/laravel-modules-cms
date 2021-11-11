<?php

namespace Modules\Realm\Models;

use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

/**
 * Modules\Realm\Models\Realmlist
 *
 * @property int $id
 * @property string $name
 * @property string $address
 * @property string $localAddress
 * @property string $localSubnetMask
 * @property int $port
 * @property bool $icon
 * @property bool $flag
 * @property bool $timezone
 * @property bool $allowedSecurityLevel
 * @property float $population
 * @property int $gamebuild
 * @property-read Server|null $server
 * @method static Builder|Realmlist newModelQuery()
 * @method static Builder|Realmlist newQuery()
 * @method static Builder|Realmlist query()
 * @mixin Eloquent
 */
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
