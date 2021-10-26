<?php

namespace App\View\Components\Form;

use App\Abstractions\View\Components\Form\BaseFormComponent;
use App\Abstractions\View\Components\Form\Traits\HandlesDefaultAndOldValue;
use App\Abstractions\View\Components\Form\Traits\HandlesValidationErrors;
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Contracts\View\View;

class Input extends BaseFormComponent
{
    use HandlesValidationErrors;
    use HandlesDefaultAndOldValue;

    public string $label;
    public string $type;
    public mixed $value;
    public bool $required;
    public bool $disabled;

    /**
     * Create a new component instance.
     *
     * @param string $name
     * @param string $label
     * @param string $type
     * @param bool $required
     * @param bool $disabled
     * @param mixed|null $bind
     * @param mixed|null $default
     * @param string|null $language
     * @param bool $showErrors
     */
    public function __construct(
        string  $name = '',
        string  $label = '',
        string  $type = 'text',
        bool    $required = true,
        bool    $disabled = false,
        mixed   $bind = null,
        mixed   $default = null,
        ?string $language = null,
        bool    $showErrors = true
    )
    {
        $this->name = $name;
        $this->label = $label;
        $this->type = $type;
        $this->required = $required;
        $this->disabled = $disabled;
        $this->showErrors = $showErrors;

        if ($language) {
            $this->name = "{$name}[{$language}]";
        }

        $this->setValue($name, $bind, $default, $language);
    }
}
