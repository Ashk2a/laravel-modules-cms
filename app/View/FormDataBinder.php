<?php

namespace App\View;

use App\Contracts\View\FormDataBinder as FormDataBinderContract;
use Illuminate\Support\Arr;

class FormDataBinder implements FormDataBinderContract
{
    /**
     * Tree of bound targets.
     *
     * @return array
     */
    private array $bindings = [];

    /**
     * Wired to a Livewire component.
     *
     * @return array
     */
    private ?string $wire = null;

    /**
     * @inerhitDoc
     */
    public function bind(mixed $target): void
    {
        $this->bindings[] = $target;
    }

    /**
     * @inerhitDoc
     */
    public function get(): mixed
    {
        return Arr::last($this->bindings);
    }

    /**
     * @inerhitDoc
     */
    public function pop(): void
    {
        array_pop($this->bindings);
    }

    /**
     * @inerhitDoc
     */
    public function isWired(): bool
    {
        return null !== $this->wire;
    }

    /**
     * @inerhitDoc
     */
    public function getWireModifier(): ?string
    {
        return $this->wire;
    }

    /**
     * @inerhitDoc
     */
    public function wire(string $modifier = ''): void
    {
        $this->wire = $modifier;
    }

    /**
     * @inerhitDoc
     */
    public function endWire(): void
    {
        $this->wire = '';
    }
}
