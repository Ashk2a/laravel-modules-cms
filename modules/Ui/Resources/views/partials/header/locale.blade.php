<x-ui::header.dropdown @click.prevent="locale = !locale">
    EN
    <x-slot name="iconRight">
        <x-heroicon-o-chevron-down class="h-4 w-4 flex ml-2"/>
    </x-slot>
</x-ui::header.dropdown>

<x-ui::header.dropdown.container class="left-0" x-show="locale === true" @click.away="locale = false">
    <ul class="flex justify-between flex-col w-full py-3 text-white">

    </ul>
</x-ui::header.dropdown.container>
