<?php

namespace App\Models;

use App\Abstractions\Models\Traits\HasActivities;
use App\Abstractions\Models\Traits\IsNotifiable;
use App\Models\Auth\Account;
use Database\Factories\UserFactory;
use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\DatabaseNotification;
use Illuminate\Notifications\DatabaseNotificationCollection;
use Illuminate\Support\Carbon;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Traits\HasRoles;

/**
 * App\Models\User
 *
 * @property int $id
 * @property string $nickname
 * @property string $email
 * @property string $password
 * @property string|null $remember_token
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property-read Collection|Verification[] $verifications
 * @property-read DatabaseNotificationCollection|DatabaseNotification[] $notifications
 * @property-read Collection|Permission[] $permissions
 * @property-read Collection|Role[] $roles
 * @property-read Collection|Activity[] $actions
 * @property-read Collection|Activity[] $activities
 * @property-read Collection|Reminder[] $reminders
 * @property-read Collection|Account[] $accounts
 * @method static UserFactory factory(...$parameters)
 * @method static Builder|User newModelQuery()
 * @method static Builder|User newQuery()
 * @method static Builder|User permission($permissions)
 * @method static Builder|User query()
 * @method static Builder|User role($roles, $guard = null)
 * @mixin Eloquent
 */
class User extends Authenticatable
{
    use HasFactory,
        HasRoles,
        HasActivities,
        IsNotifiable;

    /**
     * @var string[]
     */
    protected $fillable = [
        'nickname',
        'email',
        'password',
    ];

    /**
     * @var string[]
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * @return bool
     */
    public function isVerified(): bool
    {
        return $this->verifications->where('completed', true)->first() !== null;
    }

    /**
     * @return BelongsToMany
     */
    public function accounts(): BelongsToMany
    {
        return $this->belongsToMany(Account::class,'user_accounts')
            ->using(UserAccount::class)
            ->withTimestamps();
    }

    /**
     * @return HasMany
     */
    public function verifications(): HasMany
    {
        return $this->hasMany(Verification::class);
    }

    /**
     * @return HasMany
     */
    public function reminders(): HasMany
    {
        return $this->hasMany(Reminder::class);
    }
}
