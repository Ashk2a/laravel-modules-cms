<?php

namespace Modules\Core\Http\Concerns;

use Usernotnull\Toast\Notification;

trait HasFlashToast
{
    /**
     * @param string $message
     * @param string|null $title
     * @return Notification
     */
    private function toastDanger(string $message, ?string $title = null): Notification
    {
        return toast()->danger($message, $title);
    }

    /**
     * @param string $message
     * @param string|null $title
     * @return Notification
     */
    private function toastInfo(string $message, ?string $title = null): Notification
    {
        return toast()->info($message, $title);
    }

    /**
     * @param string $message
     * @param string|null $title
     * @return Notification
     */
    private function toastSuccess(string $message, ?string $title = null): Notification
    {
        return toast()->success($message, $title);
    }

    /**
     * @param string $message
     * @param string|null $title
     * @return Notification
     */
    private function toastWarning(string $message, ?string $title = null): Notification
    {
        return toast()->warning($message, $title);
    }

    /**
     * @param string $message
     * @param string|null $title
     * @return void
     */
    public function flashNowDanger(string $message, ?string $title = null): void
    {
        $this->toastDanger($message, $title)->push();
    }

    /**
     * @param string $message
     * @param string|null $title
     * @return void
     */
    public function flashNowInfo(string $message, ?string $title = null): void
    {
        $this->toastInfo($message, $title)->push();
    }

    /**
     * @param string $message
     * @param string|null $title
     * @return void
     */
    public function flashNowSuccess(string $message, ?string $title = null): void
    {
        $this->toastSuccess($message, $title)->push();
    }

    /**
     * @param string $message
     * @param string|null $title
     * @return void
     */
    public function flashNowWarning(string $message, ?string $title = null): void
    {
        $this->toastWarning($message, $title)->push();
    }

    /**
     * @param string $message
     * @param string|null $title
     * @return void
     */
    public function flashNextDanger(string $message, ?string $title = null): void
    {
        $this->toastDanger($message, $title)->pushOnNextPage();
    }

    /**
     * @param string $message
     * @param string|null $title
     * @return void
     */
    public function flashNextInfo(string $message, ?string $title = null): void
    {
        $this->toastInfo($message, $title)->pushOnNextPage();
    }

    /**
     * @param string $message
     * @param string|null $title
     * @return void
     */
    public function flashNextSuccess(string $message, ?string $title = null): void
    {
        $this->toastSuccess($message, $title)->pushOnNextPage();
    }

    /**
     * @param string $message
     * @param string|null $title
     * @return void
     */
    public function flashNextWarning(string $message, ?string $title = null): void
    {
        $this->toastWarning($message, $title)->pushOnNextPage();
    }
}
