<?php

namespace App\View\Components\Form;

use App\Abstractions\View\Components\Form\BaseFormComponent;
use App\Abstractions\View\Components\Form\Traits\HandlesValidationErrors;

class CustomSelect extends BaseFormComponent
{
    use HandlesValidationErrors;

    public string $label;
    public array $options;
    public string $emptyMessage;
    public string $placeholder;

    public function __construct(
        string $name,
        string $label = '',
        array $options = [],
        string $emptyMessage = '',
        string $placeholder = '',
        bool $showErrors = true,
    )
    {
        $this->name = $name;
        $this->label = $label;
        $this->options = $options;
        $this->emptyMessage = (empty($emptyMessage) ? (string)trans('global.empty_result') : $emptyMessage);
        $this->placeholder = (empty($placeholder) ? (string)trans('global.make_a_choice') : $placeholder);
        $this->showErrors = $showErrors;
    }
}
