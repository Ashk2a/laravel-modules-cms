<x-ui::header.dropdown @click.prevent="locale = !locale">
    {{ strtoupper(app()->getLocale()) }}
    <x-slot name="iconRight">
        <x-heroicon-o-chevron-down class="h-4 w-4 flex ml-2"/>
    </x-slot>
</x-ui::header.dropdown>

<x-ui::header.dropdown.container class="left-0" x-show="locale === true" @click.away="locale = false">
    <ul class="flex justify-between flex-col w-full py-3 text-white">
        @foreach(locale()->getSupportedLocales() as $locale => $properties)
            <li class="flex">
                <a
                    class="flex w-full inline-flex items-center px-4 py-1 hover:bg-white hover:bg-opacity-5"
                    rel="alternate"
                    hreflang="{{ $locale }}"
                    href="{{ locale()->getLocalizedURL($locale, route(request()->route()->getName()), [], true) }}"
                >
                    <span class="flex">{{ strtoupper($locale) }}</span>
                </a>
            </li>
        @endforeach
    </ul>
</x-ui::header.dropdown.container>
