<?php

namespace App\View\Components\Form;

use App\Abstractions\View\Components\Form\BaseFormComponent;
use App\Abstractions\View\Components\Form\Traits\HandlesValidationErrors;

class Group extends BaseFormComponent
{
    use HandlesValidationErrors;

    public string $label;
    public bool $inline = false;

    /**
     * Create a new component instance.
     *
     * @param string $name
     * @param string $label
     * @param bool $inline
     * @param bool $showErrors
     */
    public function __construct(string $name = '', string $label = '', bool $inline = false, bool $showErrors = true)
    {
        $this->name = $name;
        $this->label = $label;
        $this->inline = $inline;
        $this->showErrors = $name && $showErrors;
    }
}
