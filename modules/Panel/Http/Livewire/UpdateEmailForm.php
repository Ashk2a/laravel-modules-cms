<?php

namespace Modules\Panel\Http\Livewire;

use Illuminate\Contracts\View\View;
use Modules\Core\Http\Livewire\AbstractFormComponent;

class UpdateEmailForm extends AbstractFormComponent
{
    /**
     * @var string
     */
    public string $email = '';

    /**
     * @inheritDoc
     */
    public function render(): View
    {
        return view('panel::livewire.update-email-form');
    }
}
