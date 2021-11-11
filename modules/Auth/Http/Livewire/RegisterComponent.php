<?php

namespace Modules\Auth\Http\Livewire;

use Filament\Forms\Components\Grid;
use Filament\Forms\Components\TextInput;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Livewire\Redirector;
use Modules\Auth\Models\User;
use Modules\Auth\Services\AuthService;
use Modules\Core\Http\Livewire\AbstractFormComponent;
use Modules\Auth\Models\Account;

class RegisterComponent extends AbstractFormComponent
{
    /**
     * @var string
     */
    public string $username = '';
    /**
     * @var string
     */
    public string $nickname = '';
    /**
     * @var string
     */
    public string $email = '';
    /**
     * @var string
     */
    public string $password = '';
    /**
     * @var string
     */
    public string $passwordConfirmation = '';

    /**
     * @return View
     */
    public function render(): View
    {
        return view('auth::livewire.register');
    }

    /**
     * @param AuthService $authService
     * @return Redirector|RedirectResponse
     */
    public function submit(AuthService $authService): Redirector|RedirectResponse
    {
        $this->form->getState();

        $user = $authService->register(
            $this->username,
            $this->nickname,
            $this->email,
            $this->password
        );

        if (null !== $user) {
            $this->flashNextSuccess(trans('toast.success.verification_email_sent', ['email' => $user->email]));

            return redirect()->route('auth.login');
        }

        $this->flashNowDanger(trans('toast.danger.cannot_create_account'));
    }

    /**
     * @return array
     */
    protected function getFormSchema(): array
    {
        $colSpan = [
            'default' => 2,
            'sm' => 1
        ];

        return [
            Grid::make(['default' => 2])
                ->schema([
                    TextInput::make('email')
                        ->label(trans('global.email'))
                        ->columnSpan(2)
                        ->type('email')
                        ->required()
                        ->email()
                        ->maxLength(191)
                        ->unique(User::class, 'email')
                        ->unique(Account::class, 'email'),
                    TextInput::make('password')
                        ->label(trans('global.password'))
                        ->columnSpan($colSpan)
                        ->type('password')
                        ->required()
                        ->minLength(6),
                    TextInput::make('passwordConfirmation')
                        ->label(trans('global.password_confirmation'))
                        ->columnSpan($colSpan)
                        ->type('password')
                        ->required()
                        ->same('password'),
                    TextInput::make('username')
                        ->label(trans('global.username'))
                        ->helperText(trans('global.help_username'))
                        ->columnSpan($colSpan)
                        ->required()
                        ->minLength(4)
                        ->maxLength(24)
                        ->unique(Account::class, 'username'),
                    TextInput::make('nickname')
                        ->label(trans('global.nickname'))
                        ->helperText(trans('global.help_nickname'))
                        ->columnSpan($colSpan)
                        ->required()
                        ->minLength(2)
                        ->maxLength(191)
                        ->unique(User::class, 'nickname'),
                ])

        ];
    }
}
