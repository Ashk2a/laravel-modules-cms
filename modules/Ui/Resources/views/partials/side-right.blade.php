@php
    $roots = \Modules\Ui\Models\MenuItem::buildTree([\Modules\Ui\Models\MenuItem::TYPE_ROOT_ADMIN]);
@endphp

<div x-data="{side: false}">
    {{-- Sidebar right --}}
    <div class="fixed top-1/3 right-0 p-2 bg-brown-500 z-40 rounded-l-md">
        <ul class="flex flex-col space-y-2">
            {{-- Manager nav --}}
            <li class="flex">
                <x-ui::button class="btn-brown p-1" @click="side = 'manager'">
                    <x-ui::heroicon class="h-5 w-5">
                        M13 10V3L4 14h7v7l9-11h-7z
                    </x-ui::heroicon>
                </x-ui::button>
            </li>
        </ul>

    </div>

    {{-- Manager nav pane --}}
    <div
        x-cloak
        x-show="side === 'manager'"
        x-transition:enter="transition ease-in-out duration-300"
        x-transition:enter-start="opacity-0 transform scale-x-0 translate-x-1/2"
        x-transition:enter-end="opacity-100 transform scale-x-100 translate-x-0"
        x-transition:leave="transition ease-in-out duration-300"
        x-transition:leave-start="opacity-100 transform scale-x-100 translate-x-0"
        x-transition:leave-end="opacity-0 transform scale-x-0 translate-x-1/2"
        @click.away="side = false"
        class="overflow-y-auto fixed z-50 w-[24rem] mx-auto p-5 top-0 bottom-0 left-auto bg-blueGray-800 right-0 border-l-2 border-brown-600"
    >
        <h1 class="text-xl text-white text-shadow text-left">Manager</h1>
        <x-ui::container.separator class="h-[2px] my-3"/>

        <x-ui::menu.side-nav :roots="$roots"/>
    </div>
</div>
