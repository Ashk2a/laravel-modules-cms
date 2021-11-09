<?php

namespace App\Http\Livewire\Auth;

use App\Abstractions\Http\Livewire\BaseFormComponent;
use App\Models\Auth\Account;
use App\Models\User;
use App\Services\AuthService;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\TextInput;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Livewire\Redirector;

class ResetPasswordComponent extends BaseFormComponent
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
        return view('livewire.auth.reset-password');
    }

    /**
     * @param AuthService $authService
     * @return Redirector|RedirectResponse
     */
    public function submit(AuthService $authService): Redirector|RedirectResponse
    {
        $this->form->getState();

        $authService->reset($reminder, $this->newPassword);

        $this->flashNextSuccess(trans('toast.success.password_reset'));

        return redirect()->route('auth.login');
    }

    /**
     * @return array
     */
    protected function getFormSchema(): array
    {
        return [
            TextInput::make('newPassword')
                ->label(trans('global.new_password'))
                ->type('password')
                ->required()
                ->minLength(6),
            TextInput::make('newPasswordConfirmation')
                ->label(trans('global.new_password_confirmation'))
                ->type('password')
                ->required()
                ->same('password'),
        ];
    }
}
