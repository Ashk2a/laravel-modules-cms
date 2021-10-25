<?php

namespace App\Abstractions\Console\Commands;

use Illuminate\Console\Command;

abstract class BaseCommand extends Command
{
    protected const JSON_BEAUTIFY = JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES;
}
