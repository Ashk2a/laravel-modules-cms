@props(['section' => 'SECTION', 'description' => 'DESCRIPTION'])

@php
    $id = \Illuminate\Support\Str::uuid()->toString();
@endphp

<li
    x-bind:class="{'border-gold-400' : open === '{{ $id }}' }"
    {{ $attributes->merge(['class' => 'flex flex-col h-full w-full flex-grow bg-brown-500 border-[1px] border-brown-400 hover:border-gold-400']) }}
>
    <div class="flex items-center flex-1 select-none px-4 py-2 cursor-pointer" @click.prevent="open = open === '{{ $id }}' ? false : '{{ $id }}'">
        <h2 class="flex text-gold-400 flex-grow flex-basis-0 text-white">{{ $section }}</h2>
        <span class="flex flex-basis-0 flex-grow-2 text-white">{{ $description }}</span>
        <x-heroicon-o-arrow-right class="h-3 w-3 text-white" x-bind:class="{'rotate-90' : open === '{{ $id }}' }"/>
    </div>

    <div x-cloak x-show="open === '{{ $id }}'" class="flex p-6 border-b-[1px] border-brown-300">
        {{ $slot }}
    </div>
</li>
