@php
    $roots = \Modules\Ui\Models\MenuItem::buildTree([\Modules\Ui\Models\MenuItem::TYPE_ROOT_SIDE_LEFT, \Modules\Ui\Models\MenuItem::TYPE_ROOT_SIDE_RIGHT]);
@endphp

<div
    x-cloak
    x-show="mobileMenu"
    @click.away="mobileMenu = false"
    class="lg:hidden overflow-y-auto fixed z-50 w-[24rem] mx-auto p-5 top-0 bottom-0 right-auto bg-blueGray-800 left-0 border-l-2 border-brown-600"
>
    <div class="flex justify-end mb-4">
        <button>
            <x-heroicon-o-x class="h-6 w-6 text-white" @click.prevent="mobileMenu = false"/>
        </button>
    </div>

    <x-ui::menu.mobile.container :roots="$roots"/>
</div>
