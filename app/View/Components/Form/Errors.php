<?php

namespace App\View\Components\Form;

use App\Abstractions\View\Components\Form\BaseFormComponent;
use Illuminate\Support\Str;

class Errors extends BaseFormComponent
{
    public string $bag;

    /**
     * Create a new component instance.
     *
     * @param string $name
     * @param string $bag
     */
    public function __construct(string $name, string $bag = 'default')
    {
        $this->name = static::convertBracketsToDots(Str::before($name, '[]'));

        $this->bag = $bag;
    }
}
