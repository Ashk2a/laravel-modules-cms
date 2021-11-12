<?php

namespace Modules\Core\Http\Livewire;

use Filament\Forms\ComponentContainer;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Usernotnull\Toast\Concerns\WireToast;

/**
 * @property ComponentContainer $form
 */
abstract class AbstractFormComponent extends AbstractComponent implements HasForms
{
    use InteractsWithForms, WireToast;
}
