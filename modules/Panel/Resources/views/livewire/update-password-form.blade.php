<x-ui::form wire:submit.prevent="submit" class="flex flex-col md:flex-row md:space-x-6">
    {{ $this->form }}
    <x-ui::button class="btn-lightBlue btn-base h-full self-center">@lang('ui::global.update')</x-ui::button>
</x-ui::form>
