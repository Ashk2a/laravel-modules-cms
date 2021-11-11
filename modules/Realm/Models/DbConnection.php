<?php

namespace Modules\Realm\Models;

use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Crypt;
use Modules\Realm\Database\Factories\DbConnectionFactory;

/**
 * Modules\Realm\Models\DbConnection
 *
 * @property int $id
 * @property string $name
 * @property bool $type
 * @property string $host
 * @property int $port
 * @property string $database
 * @property string $prefix
 * @property string $username
 * @property string $password
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property-read Server|null $server
 * @method static DbConnectionFactory factory(...$parameters)
 * @method static Builder|DbConnection newModelQuery()
 * @method static Builder|DbConnection newQuery()
 * @method static Builder|DbConnection query()
 * @mixin Eloquent
 */
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
     * @return Factory
     */
    protected static function newFactory(): Factory
    {
        return DbConnectionFactory::new();
    }

    /**
     * Format the object for config.databases.connections collections.
     *
     * @return array
     */
    public function format(): array
    {
        $format = [
            'host' => $this->host,
            'port' => $this->port,
            'database' => $this->database,
            'username' => $this->username,
            'password' => Crypt::decryptString($this->password),
            'prefix' => $this->prefix,
        ];

        return array_merge(Config::get('database.connections.auth'), $format);
    }

    /**
     * @return HasOne
     */
    public function server(): HasOne
    {
        $foreignKey = (self::TYPE_WORLD === $this->type)
            ? 'world_db_connection_id'
            : 'characters_db_connection_id';

        return $this->HasOne(Server::class, $foreignKey);
    }
}
