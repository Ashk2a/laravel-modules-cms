<li class="flex justify-center items-center group w-full border-transparent border-b-2 hover:border-gold-500 hover:bg-black hover:bg-opacity-10">
    <a href="#" class="flex inline-flex justify-center items-center w-full text-lg text-transparent bg-clip-text bg-gradient-to-b from-gold-500 to-gold-50 py-[1.5rem] group-hover:text-gray-50">
        <span>{{ $title }}</span>
        @if (!empty($children))
            <x-heroicon class="h-4 w-4 ml-2 text-gold-300 group-hover:text-gray-50">
                M19 9l-7 7-7-7
            </x-heroicon>
        @endif
    </a>
</li>
