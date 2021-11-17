<?php

namespace Modules\Panel\Http\Livewire;

use Illuminate\Contracts\View\View;
use Modules\Core\Http\Livewire\AbstractFormComponent;

class UpdatePasswordForm extends AbstractFormComponent
{
    /**
     * @var string
     */
    public string $password = '';

    /**
     * @var string
     */
    public string $passwordConfirmation = '';

    /**
     * @inheritDoc
     */
    public function render(): View
    {
        return view('panel::livewire.update-password-form');
    }
}
