@php
    $roots = \Modules\Ui\Models\MenuItem::buildTree([
        \Modules\Ui\Models\MenuItem::SCOPE_MAIN_LEFT,
        \Modules\Ui\Models\MenuItem::SCOPE_MAIN_RIGHT
    ]);
@endphp

<div
    x-cloak
    x-show="mobileMenu"
    @click.away="mobileMenu = false"
    class="lg:hidden overflow-y-auto fixed z-50 w-[20rem] mx-auto py-5 top-0 bottom-0 left-auto bg-brown-600 right-0 border-l-2 border-brown-600"
>
    <div class="flex justify-start mb-4">
        <button class="ml-3">
            <x-heroicon-o-x class="h-6 w-6 text-white" @click.prevent="mobileMenu = false"/>
        </button>
    </div>

    @guest
        <div class="grid grid-cols-2 gap-x-3 p-3">
            <a href="{{ locale()->localizeURL(route('auth.register')) }}" class="btn-xs btn-red btn-w-full text-center">@lang('ui::global.sign_up')</a>
            <a href="{{ locale()->localizeURL(route('auth.login')) }}" class="btn-xs btn-lightBlue btn-w-full text-center">@lang('ui::global.login')</a>
        </div>
    @endguest

    <x-ui::header.menu.mobile.container :roots="$roots"/>
</div>
