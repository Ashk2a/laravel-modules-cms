<?php

namespace App\Http\Livewire\Auth;

use App\Abstractions\Http\Livewire\BaseFormComponent;
use App\Services\AuthService;
use Filament\Forms\Components\TextInput;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Livewire\Redirector;

class ForgetPasswordComponent extends BaseFormComponent
{
    /**
     * @var string
     */
    public string $email = '';

    /**
     * @return View
     */
    public function render(): View
    {
        return view('livewire.auth.forget-password');
    }

    /**
     * @param AuthService $authService
     * @return Redirector|RedirectResponse
     */
    public function submit(AuthService $authService): Redirector|RedirectResponse
    {
        $this->form->getState();

        $authService->forget($this->email);

        $this->flashNextInfo(trans('toast.info.forget_password_procedure_sent'));

        return redirect()->route('auth.login');
    }

    /**
     * @return array
     */
    protected function getFormSchema(): array
    {
        return [
            TextInput::make('email')
                ->label(trans('global.email'))
                ->type('email')
                ->required()
                ->email()
                ->maxLength(191)
        ];
    }
}
