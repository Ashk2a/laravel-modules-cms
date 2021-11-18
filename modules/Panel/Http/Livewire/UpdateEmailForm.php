<?php

namespace Modules\Panel\Http\Livewire;

use Filament\Forms\Components\TextInput;
use Illuminate\Contracts\View\View;
use Modules\Core\Http\Livewire\AbstractFormComponent;
use Modules\Game\Models\Auth\Account;
use Modules\User\Models\User;
use Modules\User\Services\UserService;

class UpdateEmailForm extends AbstractFormComponent
{
    /**
     * @var string
     */
    public string $email = '';

    /**
     * @inheritDoc
     */
    public function render(): View
    {
        return view('panel::livewire.update-email-form');
    }

    /**
     * @param UserService $userService
     * @return void
     */
    public function submit(UserService $userService): void
    {
        $this->form->getState();

        $userService->updateEmail(auth()->user(), $this->email);

        $this->reset();

        $this->flashNowSuccess(trans('panel::text.email_updated'));
    }

    /**
     * @return array
     */
    protected function getFormSchema(): array
    {
        return [
            TextInput::make('email')
                ->label(trans('ui::global.new_email'))
                ->type('email')
                ->required()
                ->email()
                ->maxLength(191)
                ->unique(User::class, 'email')
                ->unique(Account::class, 'email'),
        ];
    }
}
