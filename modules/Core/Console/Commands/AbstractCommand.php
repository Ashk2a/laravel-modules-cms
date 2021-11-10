<?php

namespace Modules\Core\Console\Commands;

use Illuminate\Console\Command as LaravelCommand;

abstract class AbstractCommand extends LaravelCommand
{
    protected const JSON_BEAUTIFY = JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES;
}
