<form wire:submit.prevent="submit" class="space-y-6">
    {{ $this->form }}
    <x-button class="btn-lightBlue btn-base btn-w-full">@lang('global.register')</x-button>
</form>
