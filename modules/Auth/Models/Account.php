<?php

namespace Modules\Auth\Models;

use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Modules\Auth\Models\User;

/**
 * Modules\Auth\Models\Auth\Account
 *
 * @property int $id Identifier
 * @property string $username
 * @property mixed $salt
 * @property mixed $verifier
 * @property mixed|null $session_key
 * @property mixed|null $totp_secret
 * @property string $email
 * @property string $reg_mail
 * @property string $joindate
 * @property string $last_ip
 * @property string $last_attempt_ip
 * @property int $failed_logins
 * @property bool $locked
 * @property string $lock_country
 * @property string|null $last_login
 * @property int $online
 * @property bool $expansion
 * @property int $mutetime
 * @property string $mutereason
 * @property string $muteby
 * @property bool $locale
 * @property string $os
 * @property int $recruiter
 * @property int $totaltime
 * @property-read User|null $user
 * @method static Builder|Account newModelQuery()
 * @method static Builder|Account newQuery()
 * @method static Builder|Account query()
 * @mixin Eloquent
 */
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
}
