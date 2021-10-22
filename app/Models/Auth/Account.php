<?php

namespace App\Models\Auth;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Account extends Model
{
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
        'reg_email',
        'salt',
        'verifier',
    ];

    public function user(): BelongsTo
    {
        return $this->setConnection('website')->belongsTo(User::class);
    }
}
