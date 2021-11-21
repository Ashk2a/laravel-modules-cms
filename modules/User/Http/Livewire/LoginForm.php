<?php

namespace Modules\User\Http\Livewire;

use Filament\Forms\Components\Checkbox;
use Filament\Forms\Components\TextInput;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Arr;
use Livewire\Redirector;
use Modules\User\Exceptions\UserNotVerifiedException;
use Modules\User\Services\AuthService;
use Modules\Core\Http\Livewire\AbstractFormComponent;
use Psr\Container\ContainerExceptionInterface;
use Psr\Container\NotFoundExceptionInterface;

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
        return view('user::livewire.login-form');
    }

    /**
     * @param AuthService $authService
     * @return Redirector|RedirectResponse|null
     */
    public function submit(AuthService $authService): Redirector|RedirectResponse|null
    {
        $this->form->getState();

        try {
            $user = $authService->login(
                $this->email,
                $this->password,
                $this->rememberMe
            );
        } catch (UserNotVerifiedException) {
            $this->flashNextWarning(trans('user::text.user_not_verified'));

            return redirect()->route('auth.login');
        }

        if (null !== $user) {
            $this->flashNextInfo(trans('user::text.welcome_back', ['nickname' => $user->nickname]));

            try {
                $intended = session()->get('url.intended');

                if (null !== $intended) {
                    return redirect($intended);
                }
            } catch (NotFoundExceptionInterface | ContainerExceptionInterface) {}

            return redirect()->route('home');
        }

        // Authentication just fail cause credentials were wrong
        $this->flashNowDanger(trans('user::text.wrong_credentials'));

        return null;
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
                ->maxLength(191),
            TextInput::make('password')
                ->label(trans('ui::global.password'))
                ->type('password')
                ->required(),
            Checkbox::make('rememberMe')
                ->label(trans('ui::global.remember_me'))
        ];
    }
}
