<?php

namespace Modules\Core\Http\Livewire;

use Modules\Core\Http\Concerns\HasFlashToast;
use Filament\Forms\ComponentContainer;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Livewire\Component;
use Usernotnull\Toast\Concerns\WireToast;

/**
 * @property ComponentContainer $form
 */
abstract class AbstractFormComponent extends Component implements HasForms
{
    use InteractsWithForms, WireToast, HasFlashToast;
}
