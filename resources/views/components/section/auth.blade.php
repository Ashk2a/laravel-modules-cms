@props(['xl' => false])

<x-section.full style="background-image: url('{{ asset('images/background/auth.jpg') }}')">
    <x-section.boxed class="px-5 py-6 bg-brown-500 bg-opacity-95 border-[2px] border-brown-400 {{ ($xl === true) ? 'max-w-[40rem]' :  'max-w-[30rem]'}}">
        {{ $slot }}
    </x-section.boxed>
</x-section.full>
