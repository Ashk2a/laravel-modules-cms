<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Str;

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
