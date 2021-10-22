<?php

namespace App\Abstractions\View\Components\Form\Traits;

trait HandlesDefaultAndOldValue
{
    use HandlesBoundValues;

    /**
     * @param string $name
     * @param mixed|null $bind
     * @param mixed|null $default
     * @param string|null $language
     * @return void
     */
    private function setValue(
        string $name,
        mixed $bind = null,
        mixed $default = null,
        string $language = null
    ): void
    {
        if ($this->isWired()) {
            $this->value = '';
            return;
        }

        $inputName = static::convertBracketsToDots($name);

        if (!$language && !$this->isPasswordType()) {
            $default = $this->getBoundValue($bind, $name) ?: $default;
            $this->value = (!$this->isPasswordType()) ? old($inputName, $default) : '';
            return;
        }

        if ($bind !== false) {
            $bind = $bind ?: $this->getBoundTarget();
        }

        if ($bind) {
            $default = $bind->getTranslation($name, $language, false) ?: $default;
        }

        $this->value = (!$this->isPasswordType()) ? old("{$inputName}.{$language}", $default) : '';
    }

    public function isPasswordType(): bool {
        return $this->type === 'password';
    }
}
