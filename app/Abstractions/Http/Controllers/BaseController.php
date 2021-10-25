<?php

namespace App\Abstractions\Http\Controllers;

use App\Abstractions\Http\HasFlashToast;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller;

abstract class BaseController extends Controller
{
    use AuthorizesRequests,
        DispatchesJobs,
        ValidatesRequests,
        HasFlashToast;
}
