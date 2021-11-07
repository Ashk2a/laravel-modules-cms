<?php

namespace App\Http\Livewire;

use Filament\Forms\Components\MarkdownEditor;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Illuminate\Contracts\View\View;
use Livewire\Component;

class TestComponent extends Component implements HasForms
{
    use InteractsWithForms;

    public string $title;
    public string $content;

    public function mount(): void
    {
        $this->getCachedForm('form')?->fill([
            'title' => 'helo',
            'content' => 'content',
        ]);
    }

    public function render(): View
    {
        return view('components.livewire.test');
    }

    protected function getFormSchema(): array
    {
        return [
            TextInput::make('title')->required(),
            MarkdownEditor::make('content'),
        ];
    }
}
