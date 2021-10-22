<?php

namespace App\Abstractions\View\Components\Form\Traits;

use Illuminate\Contracts\Support\MessageBag;
use Illuminate\Support\Str;
use Illuminate\Support\ViewErrorBag;

trait HandlesValidationErrors
{
    public bool $showErrors = true;

    /**
     * Returns a boolean whether the given attribute has an error
     * and the should be shown.
     *
     * @param string $name
     * @param string $bag
     * @return boolean
     */
    public function hasErrorAndShow(string $name, string $bag = 'default'): bool
    {
        return $this->showErrors && $this->hasError($name, $bag);
    }

    /**
     * Getter for the ErrorBag.
     *
     * @param string $bag
     * @return MessageBag
     */
    protected function getErrorBag(string $bag = 'default'): MessageBag
    {
        $bags = view()->shared('errors', fn() => request()?->session()->get('errors', new ViewErrorBag));

        return $bags->getBag($bag);
    }

    /**
     * Returns a boolean whether the given attribute has an error.
     *
     * @param string $name
     * @param string $bag
     * @return boolean
     */
    public function hasError(string $name, string $bag = 'default'): bool
    {
        $name = str_replace(['[', ']'], ['.', ''], Str::before($name, '[]'));

        $errorBag = $this->getErrorBag($bag);

        return $errorBag->has($name) || $errorBag->has($name . '.*');
    }
}
