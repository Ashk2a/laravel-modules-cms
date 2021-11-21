<?php

namespace Modules\Core\Http\Controllers\Manager;

use Illuminate\Contracts\View\View;
use Modules\Core\Http\Controllers\AbstractController;

class DashboardController extends AbstractController
{
    /**
     * @return View
     */
    public function index(): View {
        return view('core::manager.pages.dashboard');
    }
}
