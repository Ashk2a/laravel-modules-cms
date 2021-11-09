<?php

namespace App\Abstractions\Http\Livewire;

use App\Abstractions\Http\HasFlashToast;
use Filament\Forms\ComponentContainer;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Livewire\Component;
use Usernotnull\Toast\Concerns\WireToast;

/**
 * @property ComponentContainer $form
 */
abstract class BaseFormComponent extends Component implements HasForms
{
    use InteractsWithForms, WireToast, HasFlashToast;
}
