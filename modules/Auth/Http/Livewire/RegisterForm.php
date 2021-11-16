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

class RegisterForm extends AbstractFormComponent
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
        return view('auth::livewire.register-form');
    }

    /**
     * @param AuthService $authService
     * @return Redirector|RedirectResponse|null
     */
    public function submit(AuthService $authService): Redirector|RedirectResponse|null
    {
        $this->form->getState();

        $user = $authService->register(
            $this->username,
            $this->nickname,
            $this->email,
            $this->password
        );

        if (null !== $user) {
            $this->flashNextSuccess(trans('ui::text.verification_email_sent', ['email' => $user->email]));

            return redirect()->route('auth.login');
        }

        $this->flashNowDanger(trans('ui::text.cannot_create_account'));

        return null;
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
                        ->label(trans('ui::global.email'))
                        ->columnSpan(2)
                        ->type('email')
                        ->required()
                        ->email()
                        ->maxLength(191)
                        ->unique(User::class, 'email')
                        ->unique(Account::class, 'email'),
                    TextInput::make('password')
                        ->label(trans('ui::global.password'))
                        ->columnSpan($colSpan)
                        ->type('password')
                        ->required()
                        ->minLength(6),
                    TextInput::make('passwordConfirmation')
                        ->label(trans('ui::global.password_confirmation'))
                        ->columnSpan($colSpan)
                        ->type('password')
                        ->required()
                        ->same('password'),
                    TextInput::make('username')
                        ->label(trans('ui::global.username'))
                        ->helperText(trans('ui::global.help_username'))
                        ->columnSpan($colSpan)
                        ->required()
                        ->minLength(4)
                        ->maxLength(24)
                        ->unique(Account::class, 'username'),
                    TextInput::make('nickname')
                        ->label(trans('ui::global.nickname'))
                        ->helperText(trans('ui::global.help_nickname'))
                        ->columnSpan($colSpan)
                        ->required()
                        ->minLength(2)
                        ->maxLength(191)
                        ->unique(User::class, 'nickname'),
                ])

        ];
    }
}
