<form wire:submit.prevent="submit" class="space-y-6">
    {{ $this->form }}
    <x-ui::button class="btn-lightBlue btn-base btn-w-full">@lang('global.reset_my_password')</x-ui::button>
</form>
