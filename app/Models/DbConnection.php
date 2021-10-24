<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Crypt;
use PDO;

class DbConnection extends Model
{
    use HasFactory;

    const TYPE_WORLD = 1;
    const TYPE_CHARACTERS = 2;

    /**
     * @var array
     */
    protected $fillable = [
        'name',
        'type',
        'host',
        'port',
        'database',
        'prefix',
        'username',
        'password',
    ];

    /**
     * Format the object for config.databases.connections collections.
     *
     * @return array
     */
    public function format(): array
    {
        return array_merge(Config::get('database.connections.auth', [
            'host' => $this->host,
            'port' => $this->port,
            'database' => $this->database,
            'username' => $this->username,
            'password' => Crypt::decryptString($this->password),
            'prefix' => $this->prefix,
        ]));
    }

    /**
     * @return BelongsTo
     */
    public function server(): BelongsTo
    {
        $foreignKey = (self::TYPE_WORLD === $this->type)
            ? 'world_db_connection_id'
            : 'characters_db_connection_id';

        return $this->belongsTo(Server::class, $foreignKey);
    }
}
