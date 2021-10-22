<?php

namespace App\View\Components\Form;

use App\Abstractions\View\Components\Form\BaseFormComponent;

class Label extends BaseFormComponent
{
    public string $label;
    public bool $required;

    /**
     * Create a new component instance.
     *
     * @param string $label
     * @param bool $required
     */
    public function __construct(string $label = '', bool $required = false)
    {
        $this->label = $label;
        $this->required = $required;
    }
}
