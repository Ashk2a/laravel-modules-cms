<?php

namespace App\Contracts\View;

use Illuminate\Support\Arr;

interface FormDataBinder
{
    /**
     * Bind a target to the current instance
     *
     * @param mixed $target
     * @return void
     */
    public function bind(mixed $target): void;

    /**
     * Get the latest bound target.
     *
     * @return mixed
     */
    public function get(): mixed;

    /**
     * Remove the last binding.
     *
     * @return void
     */
    public function pop(): void;

    /**
     * Returns whether the form is bound to a Livewire model.
     *
     * @return boolean
     */
    public function isWired(): bool;

    /**
     * Returns the modifier, if set.
     *
     * @return string|null
     */
    public function getWireModifier(): ?string;

    /**
     * Enable Livewire binding with an optional modifier.
     *
     * @param string $modifier
     * @return void
     */
    public function wire(string $modifier = ''): void;

    /**
     * Disable Livewire binding.
     *
     * @return void
     */
    public function endWire(): void;
}
