<?php

namespace App\Models;

use App\Models\Auth\Realmlist;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

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
     * @return HasOne
     */
    public function realmlist(): HasOne
    {
        return $this->setConnection('auth')->hasOne(Realmlist::class);
    }

    /**
     * @return HasOne
     */
    public function worldDbConnection(): HasOne
    {
        return $this->hasOne(DbConnection::class, 'world_db_connection_id', 'id');
    }

    /**
     * @return HasOne
     */
    public function charactersDbConnection(): HasOne
    {
        return $this->hasOne(DbConnection::class, 'characters_db_connection_id', 'id');
    }
}
