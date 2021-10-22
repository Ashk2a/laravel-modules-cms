<?php

namespace App\Providers;

use App\Contracts\View\FormDataBinder as FormDataBinderContract;
use App\View\FormDataBinder;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;

class ViewServiceProvider extends ServiceProvider
{
    /**
     * @return void
     */
    public function register():void {
        $this->app->singleton(FormDataBinderContract::class, fn() => new FormDataBinder());
    }

    /**
     * @return void
     */
    public function boot(): void
    {
        Blade::directive('bind', function ($bind) {
            return '<?php app(\App\Contracts\View\FormDataBinder::class)->bind(' . $bind . '); ?>';
        });

        Blade::directive('endbind', function () {
            return '<?php app(\App\Contracts\View\FormDataBinder::class)->pop(); ?>';
        });

        Blade::directive('wire', function (string $modifier = '') {
            return '<?php app(\App\Contracts\View\FormDataBinder::class)->wire(' . $modifier . '); ?>';
        });

        Blade::directive('endwire', function () {
            return '<?php app(\App\Contracts\View\FormDataBinder::class)->endWire(); ?>';
        });
    }
}
