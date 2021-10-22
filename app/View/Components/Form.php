<?php

namespace App\View\Components;

use App\Abstractions\View\Components\BaseComponent;
use Illuminate\Support\ViewErrorBag;
use JetBrains\PhpStorm\Pure;

class Form extends BaseComponent
{
    /**
     * Request method.
     */
    public string $method;

    /**
     * Form method spoofing to support PUT, PATCH and DELETE actions.
     * https://laravel.com/docs/master/routing#form-method-spoofing
     */
    public bool $spoofMethod = false;

    public bool $showHelper = false;

    /**
     * Create a new component instance.
     *
     * @param string $method
     * @param bool $showHelper
     */
    #[Pure] public function __construct(string $method = 'POST', bool $showHelper = false)
    {
        $this->method = strtoupper($method);
        $this->showHelper = $showHelper;

        $this->spoofMethod = in_array($this->method, ['PUT', 'PATCH', 'DELETE']);
    }

    /**
     * Returns a boolean whether the error bag is not empty.
     *
     * @param string $bag
     * @return boolean
     */
    public function hasError(string $bag = 'default'): bool
    {
        $errors = view()->shared('errors', fn() => request()?->session()->get('errors', new ViewErrorBag));

        return $errors->getBag($bag)->isNotEmpty();
    }
}
