<x-ui::form wire:submit.prevent="submit">
    {{ $this->form }}
    <x-ui::button class="btn-lightBlue btn-base btn-w-full">@lang('ui::global.send')</x-ui::button>
</x-ui::form>
