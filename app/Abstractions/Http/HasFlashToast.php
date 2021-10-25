<?php

namespace App\Abstractions\Http;

trait HasFlashToast
{
    /**
     * @param string $message
     * @param string|null $title
     * @return void
     */
    public function flashDanger(string $message, ?string $title = null): void
    {
        toast()->danger($message, $title)->push();
    }

    /**
     * @param string $message
     * @param string|null $title
     * @return void
     */
    public function flashInfo(string $message, ?string $title = null): void
    {
        toast()->info($message, $title)->push();
    }

    /**
     * @param string $message
     * @param string|null $title
     * @return void
     */
    public function flashSuccess(string $message, ?string $title = null): void
    {
        toast()->success($message, $title)->push();
    }

    /**
     * @param string $message
     * @param string|null $title
     * @return void
     */
    public function flashWarning(string $message, ?string $title = null): void
    {
        toast()->warning($message, $title)->push();
    }
}
