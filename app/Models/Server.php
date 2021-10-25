<?php

namespace App\Models;

use App\Models\Auth\Realmlist;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

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
