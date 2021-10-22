<?php

namespace App\Abstractions\View\Components\Form;

use App\Abstractions\View\Components\BaseComponent;
use App\Contracts\View\FormDataBinder as FormDataBinderContract;

abstract class BaseFormComponent extends BaseComponent
{
    public function getViewName(): string
    {
        return 'form.' . parent::getViewName();
    }

    /**
     * Returns a boolean whether the form is wired to a Livewire component.
     *
     * @return boolean
     */
    public function isWired(): bool
    {
        return app(FormDataBinderContract::class)->isWired();
    }

    /**
     * The inversion of 'isWired()'.
     *
     * @return boolean
     */
    public function isNotWired(): bool
    {
        return !$this->isWired();
    }

    /**
     * Returns the optional wire modifier.
     *
     * @return string|null
     */
    public function wireModifier(): ?string
    {
        $modifier = app(FormDataBinderContract::class)->getWireModifier();

        return $modifier ? ".{$modifier}" : null;
    }

    /**
     * Converts a bracket-notation to a dotted-notation
     *
     * @param string $name
     * @return string
     */
    public static function convertBracketsToDots(string $name): string
    {
        return str_replace(['[', ']'], ['.', ''], $name);
    }
}
