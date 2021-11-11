@props(['title' => 'MISSING TITLE', 'actions' => null])

<x-ui::container.fluid {{ $attributes->merge(['class' => 'section-title flex']) }}>
    <x-ui::container.default class="flex items-end">
        <div class="flex flex-row items-center justify-between w-full  pb-[1rem] md:pb-[1.2rem] lg:pb-[5rem]">
            <div class="flex">
                <h1 class="text-white text-shadow text-xl md:text-2xl lg:text-3xl font-medium" style="">{{ $title }}</h1>
            </div>

            @if ($actions)
                <div class="flex">
                    {{ $actions }}
                </div>
            @endif
        </div>
    </x-ui::container.default>
</x-ui::container.fluid>
<x-ui::container.separator class="h-[5px]"/>
