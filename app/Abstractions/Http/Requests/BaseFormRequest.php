<?php

namespace App\Abstractions\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

abstract class BaseFormRequest extends FormRequest
{
    /**
     * @return array
     */
    abstract public function rules(): array;
}
