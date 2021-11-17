<?php

namespace Modules\User\Http\Livewire;

use Filament\Forms\Components\TextInput;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Livewire\Redirector;
use Modules\User\Services\AuthService;
use Modules\Core\Http\Livewire\AbstractFormComponent;

class ForgetPasswordForm extends AbstractFormComponent
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
        return view('user::livewire.forget-password-form');
    }

    /**
     * @param AuthService $authService
     * @return Redirector|RedirectResponse
     */
    public function submit(AuthService $authService): Redirector|RedirectResponse
    {
        $this->form->getState();

        $authService->forget($this->email);

        $this->flashNextInfo(trans('user::text.forget_password_procedure_sent'));

        return redirect()->route('auth.login');
    }

    /**
     * @return array
     */
    protected function getFormSchema(): array
    {
        return [
            TextInput::make('email')
                ->label(trans('ui::global.email'))
                ->type('email')
                ->required()
                ->email()
                ->maxLength(191)
        ];
    }
}
