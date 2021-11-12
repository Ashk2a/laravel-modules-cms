<?php

namespace Modules\Core\Http\Livewire;

use Livewire\Component;
use Modules\Core\Http\Concerns\HasFlashToast;

abstract class AbstractComponent extends Component
{
    use HasFlashToast;
}
