<?php

namespace App\Http\Livewire\Auth;

use App\Abstractions\Http\Livewire\BaseFormComponent;
use App\Exceptions\Auth\UserNotVerifiedException;
use App\Services\AuthService;
use Filament\Forms\Components\Checkbox;
use Filament\Forms\Components\TextInput;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Livewire\Redirector;

class LoginComponent extends BaseFormComponent
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
        return view('livewire.auth.login');
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
            $this->flashNextWarning(trans('toast.warning.user_not_verified'));

            return redirect()->route('auth.login');
        }

        if (null !== $user) {
            $this->flashNextInfo(trans('toast.info.welcome_back', ['nickname' => $user->nickname]));

            return redirect()->route('home');
        }

        // Authentication just fail cause credentials were wrong
        $this->flashNowDanger(trans('toast.danger.wrong_credentials'));
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
                ->maxLength(191),
            TextInput::make('password')
                ->label(trans('global.password'))
                ->type('password')
                ->required(),
            Checkbox::make('rememberMe')
                ->label(trans('global.remember_me'))
        ];
    }
}
