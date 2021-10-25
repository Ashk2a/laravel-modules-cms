<?php

namespace App\Abstractions\Policies;

use Illuminate\Auth\Access\HandlesAuthorization;

abstract class BasePolicy
{
    use HandlesAuthorization;
}
