<x-ui::form wire:submit.prevent="submit" class="flex flex-row space-x-2">
    {{ $this->form }}
    <x-ui::button class="btn-lightBlue btn-base h-full">@lang('ui::global.update')</x-ui::button>
</x-ui::form>
