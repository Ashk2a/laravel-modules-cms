<?php

namespace App\Http\Requests\Auth;

use App\Abstractions\Http\Requests\BaseFormRequest;

class ResetPasswordRequest extends BaseFormRequest
{
    /**
     * @inheritDoc
     */
    public function rules(): array
    {
        return [
            'new_password' => [
                'required',
                'min:6'
            ],
            'new_password_confirmation' => [
                'required',
                'same:new_password'
            ]
        ];
    }
}
