<?php

namespace Modules\Auth\Http\Livewire;

use Filament\Forms\Components\TextInput;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Livewire\Redirector;
use Modules\Auth\Services\AuthService;
use Modules\Core\Http\Livewire\AbstractFormComponent;

class ResetPasswordForm extends AbstractFormComponent
{
    public string $newPassword = '';
    /**
     * @var string
     */
    public string $newPasswordConfirmation = '';

    /**
     * @return View
     */
    public function render(): View
    {
        return view('auth::livewire.reset-password-form');
    }

    /**
     * @param AuthService $authService
     * @return Redirector|RedirectResponse
     */
    public function submit(AuthService $authService): Redirector|RedirectResponse
    {
        $this->form->getState();

        $authService->reset($reminder, $this->newPassword);

        $this->flashNextSuccess(trans('auth::text.password_reset'));

        return redirect()->route('auth.login');
    }

    /**
     * @return array
     */
    protected function getFormSchema(): array
    {
        return [
            TextInput::make('newPassword')
                ->label(trans('auth::global.new_password'))
                ->type('password')
                ->required()
                ->minLength(6),
            TextInput::make('newPasswordConfirmation')
                ->label(trans('auth::global.new_password_confirmation'))
                ->type('password')
                ->required()
                ->same('password'),
        ];
    }
}
