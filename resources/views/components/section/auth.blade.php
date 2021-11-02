<x-section.top class="section-padding-bot-footer" style="background-image: url('{{ asset('images/background/auth.jpg') }}')">
    <x-section.boxed class="{{ (isset($xl) && $xl === true) ? 'max-w-[40rem]' :  'max-w-[30rem]'}} px-5 py-6 bg-brown-500 bg-opacity-95 border-[2px] border-brown-400 shadow-test">
        {{ $slot }}
    </x-section.boxed>
</x-section.top>
