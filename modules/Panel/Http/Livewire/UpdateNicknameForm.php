<?php

namespace Modules\Panel\Http\Livewire;

use Filament\Forms\Components\TextInput;
use Illuminate\Contracts\View\View;
use Modules\Core\Http\Livewire\AbstractFormComponent;
use Modules\User\Models\User;
use Modules\User\Services\UserService;

class UpdateNicknameForm extends AbstractFormComponent
{
    /**
     * @var string
     */
    public string $nickname = '';

    /**
     * @inheritDoc
     */
    public function render(): View
    {
        return view('panel::livewire.update-nickname-form');
    }

    /**
     * @param UserService $userService
     * @return void
     */
    public function submit(UserService $userService): void
    {
        $this->form->getState();

        $userService->updateNickname(auth()->user(), $this->nickname);

        $this->reset();

        $this->flashNowSuccess(trans('panel::text.nickname_updated'));
    }

    /**
     * @return array
     */
    protected function getFormSchema(): array
    {
        return [
            TextInput::make('nickname')
                ->label(trans('ui::global.new_nickname'))
                ->required()
                ->minLength(2)
                ->maxLength(191)
                ->unique(User::class, 'nickname')
        ];
    }
}
