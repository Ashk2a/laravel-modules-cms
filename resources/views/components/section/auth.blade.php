<x-section.top class="section-padding-bot-footer" style="background-image: url('{{ asset('images/background/auth.jpg') }}')">
    <x-section.boxed class="{{ (isset($xl) && $xl === true) ? 'max-w-[40rem]' :  'max-w-[30rem]'}} section-boxed-auth">
        {{ $slot }}
    </x-section.boxed>
</x-section.top>
