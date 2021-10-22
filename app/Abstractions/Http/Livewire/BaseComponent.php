<?php

namespace App\Abstractions\Http\Livewire;

use Illuminate\Validation\ValidationException;
use Livewire\Component;

abstract class BaseComponent extends Component
{
    /**
     * @param string $name
     * @param mixed $value
     * @return void
     * @throws ValidationException
     */
    public function updated(string $name, mixed $value): void
    {
        $this->validateOnly($name);
    }
}
