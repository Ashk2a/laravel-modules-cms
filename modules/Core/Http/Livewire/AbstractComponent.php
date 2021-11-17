<?php

namespace Modules\Core\Http\Livewire;

use Illuminate\Contracts\View\View;
use Livewire\Component;
use Modules\Core\Http\Concerns\HasFlashToast;

abstract class AbstractComponent extends Component
{
    use HasFlashToast;

    /**
     * @return View
     */
    abstract public function render(): View;
}
