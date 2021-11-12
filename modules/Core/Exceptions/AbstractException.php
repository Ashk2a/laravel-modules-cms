<?php

namespace Modules\Core\Exceptions;

use Exception;

abstract class AbstractException extends Exception
{
    /**
     * @return array
     */
    public function context(): array
    {
        return ['none'];
    }
}
