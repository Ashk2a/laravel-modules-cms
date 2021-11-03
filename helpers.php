<?php

use Mcamara\LaravelLocalization\LaravelLocalization;

if (!function_exists('locale')) {
    function locale(): LaravelLocalization
    {
        return app('laravellocalization');
    }
}
