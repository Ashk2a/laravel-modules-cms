<?php

namespace App\Models;

use Carbon\Carbon;
use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Str;

/**
 * App\Models\Verification
 *
 * @property int $id
 * @property int $user_id
 * @property string $token
 * @property bool $completed
 * @property \Illuminate\Support\Carbon $expires_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read User $user
 * @method static Builder|Verification newModelQuery()
 * @method static Builder|Verification newQuery()
 * @method static Builder|Verification query()
 * @mixin Eloquent
 */
class Verification extends Model
{
    /**
     * @var string[]
     */
    protected $fillable = [
        'token',
        'completed',
        'expires_at'
    ];

    /**
     * @var string[]
     */
    protected $casts = [
        'completed' => 'bool'
    ];

    /**
     * @inerhitDoc
     */
    protected static function boot(): void
    {
        parent::boot();

        static::creating(function ($query) {
            $query->completed = false;
            $query->token = Str::random(32);
            $query->expires_at = Carbon::now()->subSeconds(Config::get('auth.verification.expires', 259200));
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
     * @return string
     */
    public function getUrl(): string
    {
        return URL::route('auth.verify', ['verification' => $this]);
    }

    /**
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
