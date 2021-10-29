<?php

namespace App\Http\Requests\Auth;

use App\Abstractions\Http\Requests\BaseFormRequest;

class ForgetPasswordRequest extends BaseFormRequest
{
    /**
     * @inheritDoc
     */
    public function rules(): array
    {
        return [
            'email' => [
                'required',
                'email',
                'max:191',
            ]
        ];
    }
}
