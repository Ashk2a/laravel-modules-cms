<?php

namespace App\View\Components\Form;

use App\Abstractions\View\Components\Form\BaseFormComponent;
use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use App\Abstractions\View\Components\Form\Traits\HandlesBoundValues;
use App\Abstractions\View\Components\Form\Traits\HandlesValidationErrors;

class Select extends BaseFormComponent
{
    use HandlesValidationErrors;
    use HandlesBoundValues;

    public string $label;
    public array $options;
    public mixed $selectedKey = '';
    public bool $multiple;
    public bool $disabled;

    /**
     * Create a new component instance.
     *
     * @param string $name
     * @param string $label
     * @param array $options
     * @param mixed|null $bind
     * @param mixed|null $default
     * @param bool $multiple
     * @param bool $showErrors
     * @param bool $manyRelation
     */
    public function __construct(
        string $name,
        string $label = '',
        array $options = [],
        mixed $bind = null,
        mixed $default = null,
        bool $multiple = false,
        bool $disabled = false,
        bool $showErrors = true,
        bool $manyRelation = false
    )
    {
        $this->name = $name;
        $this->label = $label;
        $this->options = $options;
        $this->manyRelation = $manyRelation;

        if ($this->isNotWired()) {
            $inputName = Str::before($name, '[]');

            $default = $this->getBoundValue($bind, $inputName) ?: $default;

            $this->selectedKey = old(static::convertBracketsToDots($inputName), $default);

            if ($this->selectedKey instanceof Arrayable) {
                $this->selectedKey = $this->selectedKey->toArray();
            }
        }

        $this->multiple = $multiple;
        $this->disabled = $disabled;
        $this->showErrors = $showErrors;
    }

    /**
     * @param $key
     * @return bool
     */
    public function isSelected($key): bool
    {
        if ($this->isWired()) {
            return false;
        }

        return in_array($key, Arr::wrap($this->selectedKey));
    }
}
