<?php

namespace App\Abstractions\Exceptions;

use Exception;

abstract class BaseException extends Exception
{
    /**
     * @return array
     */
    public function context(): array
    {
        return ['none'];
    }
}
