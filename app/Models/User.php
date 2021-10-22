<?php

namespace App\Models;

use App\Models\Auth\Account;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasFactory,
        HasRoles,
        Notifiable;

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
     * @return HasOne
     */
    protected function account(): HasOne
    {
        return $this->setConnection('auth')->hasOne(Account::class);
    }
}
