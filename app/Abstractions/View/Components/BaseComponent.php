<?php

namespace App\Abstractions\View\Components;

use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Str;
use Illuminate\View\Component;

abstract class BaseComponent extends Component
{
    public const COMPONENTS_DIR = 'components';

    /**
     * Component identifier.
     */
    public ?string $id = null;

    /**
     * Component name.
     */
    public ?string $name = null;

    public function getViewName(): string
    {
        return Str::kebab(class_basename($this));
    }

    public function render(): View|Htmlable|string|\Closure
    {
        return self::COMPONENTS_DIR . '.' . $this->getViewName();
    }

    /**
     * Generates an ID, once, for this component.
     *
     * @return string
     */
    public function id(): string
    {
        if ($this->id) {
            return $this->id;
        }

        if ($this->name) {
            return $this->id = $this->generateIdByName();
        }

        return $this->id = Str::random(4);
    }

    /**
     * Generates an ID by the name attribute.
     *
     * @return string
     */
    protected function generateIdByName(): string
    {
        return "auto_id_" . $this->name;
    }
}
