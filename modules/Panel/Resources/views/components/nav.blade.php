<div {{ $attributes->merge(['class' => 'flex flex-grow']) }}>
    <ul class="flex space-x-8" aria-label="Tabs">
        <x-panel::nav.item :route="route('panel.overview')">
            <x-slot name="icon">
                <x-heroicon-s-eye/>
            </x-slot>
            @lang('ui::global.overview')
        </x-panel::nav.item>
        <x-panel::nav.item :route="route('panel.preferences')">
            <x-slot name="icon">
                <x-heroicon-s-adjustments/>
            </x-slot>
            @lang('ui::global.preferences')
        </x-panel::nav.item>
    </ul>
</div>
