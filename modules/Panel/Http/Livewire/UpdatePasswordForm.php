<?php

namespace Modules\Panel\Http\Livewire;

use Filament\Forms\Components\Grid;
use Filament\Forms\Components\TextInput;
use Illuminate\Contracts\View\View;
use Modules\Core\Http\Livewire\AbstractFormComponent;
use Modules\Game\Models\Auth\Account;
use Modules\User\Models\User;
use Modules\User\Services\UserService;

class UpdatePasswordForm extends AbstractFormComponent
{
    /**
     * @var string
     */
    public string $password = '';

    /**
     * @var string
     */
    public string $passwordConfirmation = '';

    /**
     * @inheritDoc
     */
    public function render(): View
    {
        return view('panel::livewire.update-password-form');
    }

    /**
     * @param UserService $userService
     * @return void
     */
    public function submit(UserService $userService): void
    {
        $this->form->getState();

        $userService->updatePassword(auth()->user(), $this->password);

        $this->reset();

        $this->flashNowSuccess(trans('panel::text.password_updated'));
    }

    /**
     * @return array
     */
    protected function getFormSchema(): array
    {
        return [
            Grid::make(['md' => 2, 'default' => 1])
                ->schema([
                    TextInput::make('password')
                        ->label(trans('ui::global.new_password'))
                        ->columnSpan(1)
                        ->type('password')
                        ->required()
                        ->minLength(6),
                    TextInput::make('passwordConfirmation')
                        ->label(trans('ui::global.new_password_confirmation'))
                        ->columnSpan(1)
                        ->type('password')
                        ->required()
                        ->same('password'),
                ])
        ];
    }
}
