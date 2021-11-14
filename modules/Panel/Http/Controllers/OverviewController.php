<?php

namespace Modules\Panel\Http\Controllers;

use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Modules\Core\Http\Controllers\AbstractController;

class OverviewController extends AbstractController
{
    /**
     * @return Factory|View|Application
     */
    public function index(): Factory|View|Application
    {
        return view('panel::pages.overview');
    }
}
