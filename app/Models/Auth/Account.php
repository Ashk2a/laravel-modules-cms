<?php

namespace App\Models\Auth;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Account extends Model
{
    /**
     * @var bool
     */
    public $timestamps = false;

    /**
     * @var string
     */
    protected $connection = 'auth';

    /**
     * @var string
     */
    protected $table = 'account';

    /**
     * @var string[]
     */
    protected $fillable = [
        'username',
        'email',
        'reg_mail',
        'salt',
        'verifier',
    ];

    /**
     * @var string[]
     */
    protected $hidden = [
        'salt',
        'verifier',
        'session_key'
    ];

    /**
     * @return HasOne
     */
    public function user(): HasOne
    {
        return $this->hasOne(User::class);
    }
}
