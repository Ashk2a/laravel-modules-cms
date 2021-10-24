<?php

namespace App\Models\Auth;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

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
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->setConnection('website')->belongsTo(User::class);
    }
}
