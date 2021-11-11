<?php

namespace Modules\Realm\Models;

use Database\Factories\ServerFactory;
use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Carbon;

/**
 * Modules\Realm\Models\Server
 *
 * @property int $id
 * @property int $realmlist_id
 * @property int $world_db_connection_id
 * @property int $characters_db_connection_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property-read DbConnection $charactersDbConnection
 * @property-read Realmlist $realmlist
 * @property-read DbConnection $worldDbConnection
 * @method static ServerFactory factory(...$parameters)
 * @method static Builder|Server newModelQuery()
 * @method static Builder|Server newQuery()
 * @method static Builder|Server query()
 * @mixin Eloquent
 */
class Server extends Model
{
    use HasFactory;

    /**
     * @var string[]
     */
    protected $fillable = [
        'realmlist_id',
        'world_db_connection_id',
        'characters_db_connection_id'
    ];

    /**
     * @return BelongsTo
     */
    public function realmlist(): BelongsTo
    {
        return $this->BelongsTo(Realmlist::class);
    }

    /**
     * @return BelongsTo
     */
    public function worldDbConnection(): BelongsTo
    {
        return $this->BelongsTo(DbConnection::class, 'world_db_connection_id', 'id');
    }

    /**
     * @return BelongsTo
     */
    public function charactersDbConnection(): BelongsTo
    {
        return $this->BelongsTo(DbConnection::class, 'characters_db_connection_id', 'id');
    }
}
