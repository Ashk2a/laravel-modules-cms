<?php

namespace App\Http\Requests\Auth;

use App\Abstractions\Http\Requests\BaseFormRequest;
use Illuminate\Support\Facades\Auth;

class RegisterRequest extends BaseFormRequest
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
            'username' => [
                'required',
                'min:4',
                'max:24',
                'unique:auth.account,username'
            ],
            'nickname' => [
                'required',
                'min:2',
                'max:191',
                'unique:users,nickname'
            ],
            'email' => [
                'required',
                'email',
                'max:191',
                'unique:users,email'
            ],
            'password' => [
                'required',
                'min:6'
            ],
            'password_confirmation' => [
                'required',
                'same:password'
            ]
        ];
    }
}
