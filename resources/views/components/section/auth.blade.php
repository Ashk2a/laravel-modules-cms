@props(['xl' => false])

<x-section.top class="section-padding-bot-footer" style="background-image: url('{{ asset('images/background/auth.jpg') }}')">
    <x-section.boxed class="{{ ($xl === true) ? 'max-w-[40rem]' :  'max-w-[30rem]'}} section-boxed-auth">
        {{ $slot }}
    </x-section.boxed>
</x-section.top>
