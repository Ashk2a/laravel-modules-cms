<?php

namespace Modules\Panel\Http\Livewire;

use Illuminate\Contracts\View\View;
use Modules\Core\Http\Livewire\AbstractFormComponent;

class UpdateAvatarForm extends AbstractFormComponent
{
    /**
     * @var string
     */
    public string $avatar = '';

    /**
     * @inheritDoc
     */
    public function render(): View
    {
        return view('panel::livewire.update-avatar-form');
    }
}
