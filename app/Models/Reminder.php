<?php

namespace App\Models;

use Carbon\Carbon;
use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Str;

/**
 * App\Models\Reminder
 *
 * @property int $id
 * @property int $user_id
 * @property string $token
 * @property string $expires_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read User $user
 * @method static Builder|Reminder newModelQuery()
 * @method static Builder|Reminder newQuery()
 * @method static Builder|Reminder query()
 * @mixin Eloquent
 */
class Reminder extends Model
{
    protected $fillable = [
        'token',
        'expired_at'
    ];

    /**
     * Automatically set a random value to token and set expires_at value
     *
     * @inerhitDoc
     */
    protected static function boot(): void
    {
        parent::boot();

        static::creating(function ($query) {
            $query->token = Str::random(32);
            $query->expires_at = Carbon::now()->subSeconds(Config::get('auth.reminder.expires', 259200));
        });
    }

    /**
     * @return bool
     */
    public function hasExpired(): bool
    {
        return $this->expires_at->lte(Carbon::now());
    }

    /**
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
