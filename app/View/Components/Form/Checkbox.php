<?php

namespace App\View\Components\Form;

use App\Abstractions\View\Components\Form\BaseFormComponent;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use App\Abstractions\View\Components\Form\Traits\HandlesBoundValues;
use App\Abstractions\View\Components\Form\Traits\HandlesValidationErrors;

class Checkbox extends BaseFormComponent
{
    use HandlesValidationErrors;
    use HandlesBoundValues;

    public string $label;
    public int $value;
    public bool $required = false;
    public bool $checked = false;

    /**
     * Create a new component instance.
     *
     * @param string $name
     * @param string $label
     * @param int $value
     * @param bool $required
     * @param mixed|null $bind
     * @param bool $default
     * @param bool $showErrors
     */
    public function __construct(
        string $name,
        string $label = '',
        int $value = 1,
        bool $required = false,
        mixed $bind = null,
        bool $default = false,
        bool $showErrors = true
    )
    {
        $this->name = $name;
        $this->label = $label;
        $this->value = $value;
        $this->required = $required;
        $this->showErrors = $showErrors;

        $inputName = Str::before($name, '[]');

        if ($oldData = old(static::convertBracketsToDots($inputName))) {
            $this->checked = in_array($value, Arr::wrap($oldData));
        }

        if (!session()->hasOldInput() && $this->isNotWired()) {
            $boundValue = $this->getBoundValue($bind, $inputName);

            if (is_array($boundValue)) {
                $this->checked = in_array($value, $boundValue);
                return;
            }

            $this->checked = is_null($boundValue) ? $default : $boundValue;
        }
    }

    /**
     * Generates an ID by the name and value attributes.
     *
     * @return string
     */
    protected function generateIdByName(): string
    {
        return "auto_id_" . $this->name . "_" . $this->value;
    }
}
