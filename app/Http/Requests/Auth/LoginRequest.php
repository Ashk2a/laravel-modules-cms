<?php

namespace App\Http\Requests\Auth;

use App\Abstractions\Http\Requests\BaseFormRequest;
use Illuminate\Support\Facades\Auth;

class LoginRequest extends BaseFormRequest
{
    /**
     * @return bool
     */
    public function authorize(): bool
    {
        return !Auth::check();
    }

    /**
     * @return array
     */
    public function rules(): array
    {
        return [
            'email' => [
                'required',
                'email',
                'max:191',
            ],
            'password' => [
                'required'
            ],
            'remember_me' => [
                'boolean'
            ]
        ];
    }
}
