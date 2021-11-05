<x-container.fluid {{ $attributes->merge(['class' => 'section-title flex']) }}>
    <x-container.default class="flex items-end mb-[1rem] md:mb-[1.2rem] lg:mb-[5rem]">
        <h1 class="text-white text-shadow text-xl md:text-2xl lg:text-3xl font-medium" style="">{{ $title }}</h1>
    </x-container.default>
</x-container.fluid>
<x-container.separator class="h-[5px]"/>
