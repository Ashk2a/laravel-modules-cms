<?php

namespace Modules\Auth\Http\Livewire;

use Filament\Forms\Components\Checkbox;
use Filament\Forms\Components\TextInput;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Livewire\Redirector;
use Modules\Auth\Exceptions\UserNotVerifiedException;
use Modules\Auth\Services\AuthService;
use Modules\Core\Http\Livewire\AbstractFormComponent;

class LoginForm extends AbstractFormComponent
{
    /**
     * @var string
     */
    public string $email = '';
    /**
     * @var string
     */
    public string $password = '';
    /**
     * @var bool
     */
    public bool $rememberMe = false;

    /**
     * @return View
     */
    public function render(): View
    {
        return view('auth::livewire.login-form');
    }

    /**
     * @param AuthService $authService
     * @return Redirector|RedirectResponse
     */
    public function submit(AuthService $authService): Redirector|RedirectResponse
    {
        $this->form->getState();

        try {
            $user = $authService->login(
                $this->email,
                $this->password,
                $this->rememberMe
            );
        } catch (UserNotVerifiedException) {
            $this->flashNextWarning(trans('auth::text.user_not_verified'));

            return redirect()->route('auth.login');
        }

        if (null !== $user) {
            $this->flashNextInfo(trans('auth::text.welcome_back', ['nickname' => $user->nickname]));

            return redirect()->route('home');
        }

        // Authentication just fail cause credentials were wrong
        $this->flashNowDanger(trans('auth::text.wrong_credentials'));
    }

    /**
     * @return array
     */
    protected function getFormSchema(): array
    {
        return [
            TextInput::make('email')
                ->label(trans('auth::global.email'))
                ->type('email')
                ->required()
                ->email()
                ->maxLength(191),
            TextInput::make('password')
                ->label(trans('auth::global.password'))
                ->type('password')
                ->required(),
            Checkbox::make('rememberMe')
                ->label(trans('auth::global.remember_me'))
        ];
    }
}
