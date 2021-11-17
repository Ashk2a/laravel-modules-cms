<?php

namespace Modules\Panel\Http\Livewire;

use Illuminate\Contracts\View\View;
use Modules\Core\Http\Livewire\AbstractFormComponent;

class UpdateNicknameForm extends AbstractFormComponent
{
    /**
     * @var string
     */
    public string $nickname = '';

    /**
     * @inheritDoc
     */
    public function render(): View
    {
        return view('panel::livewire.update-nickname-form');
    }
}
