<div {{ $attributes->merge(['class' => 'flex flex-grow']) }}>
    <ul class="flex space-x-8" aria-label="Tabs">
        <x-panel::nav.item :route="route('panel.overview')">
            <x-slot name="icon">
                <x-heroicon-s-eye/>
            </x-slot>
            Overview
        </x-panel::nav.item>
        <x-panel::nav.item :route="route('home')">
            <x-slot name="icon">
                <x-heroicon-s-adjustments/>
            </x-slot>
            Preferences
        </x-panel::nav.item>
    </ul>
</div>
