@php
    $leftRoots = \Modules\Ui\Models\MenuItem::buildTree([\Modules\Ui\Models\MenuItem::SCOPE_MAIN_LEFT]);
    $rightRoots = \Modules\Ui\Models\MenuItem::buildTree([\Modules\Ui\Models\MenuItem::SCOPE_MAIN_RIGHT])
@endphp

<div class="bg-brown-500 bg-opacity-90" x-data="{mobileMenu: true}">
    <x-ui::container.default class="border-b-[1px] border-black border-opacity-20">
        <div class="grid grid-cols-5 lg:py-0 py-3">
            <div class="col-span-2">
                <x-ui::header.menu.container :roots="$leftRoots"/>
            </div>

            <div class="col-span-1">
                @include('ui::partials.header.logo')
            </div>

            <div class="col-span-2">
                @include('ui::partials.header.mobile.burger')
                <x-ui::header.menu.container :roots="$rightRoots"/>
            </div>
        </div>
    </x-ui::container.default>

    @include('ui::partials.header.mobile.side')
</div>
