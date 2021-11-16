<x-ui::header.dropdown @click.prevent="account = !account">
    @auth
        {{ auth()->user()->nickname }}
    @endauth

    @guest
        @lang('ui::global.my_account')
    @endguest

    <x-slot name="iconRight">
        <x-heroicon-o-chevron-down class="h-4 w-4 flex ml-2"/>
    </x-slot>
</x-ui::header.dropdown>

<x-ui::header.dropdown.container class="right-0" x-show="account === true" @click.away="account = false">
    <ul class="flex justify-between flex-col w-full py-3 text-white">
        @guest
            <x-ui::header.dropdown.banner :route="route('auth.login')">@lang('ui::global.login')</x-ui::header.dropdown.banner>
            <x-ui::header.dropdown.separator/>
            <x-ui::header.dropdown.item :route="route('auth.register')">
                @lang('ui::global.sign_up')
                <x-slot name="iconLeft">
                    <x-heroicon-o-plus class="h-4 w-4 mr-2"/>
                </x-slot>
            </x-ui::header.dropdown.item>
        @endguest

        @auth
            @can('manager.dashboard.index')
                <x-ui::header.dropdown.banner class="mb-3" :route="route('home')" color="red">Manager</x-ui::header.dropdown.banner>
            @endcan

            <x-ui::header.dropdown.banner :route="route('home')">@lang('ui::global.see_my_profile')</x-ui::header.dropdown.banner>
            <x-ui::header.dropdown.separator/>
            <x-ui::header.dropdown.category>My panel</x-ui::header.dropdown.category>
            <x-ui::header.dropdown.item>Overview</x-ui::header.dropdown.item>
            <x-ui::header.dropdown.item>Ingame account</x-ui::header.dropdown.item>
            <x-ui::header.dropdown.item>Preferences</x-ui::header.dropdown.item>
            <x-ui::header.dropdown.separator/>
            <x-ui::header.dropdown.item class="text-red-400" :route="route('auth.logout')">
                @lang('ui::global.logout')
                <x-slot name="iconRight">
                    <x-heroicon-o-logout class="h-4 w-4 ml-2"/>
                </x-slot>
            </x-ui::header.dropdown.item>
        @endauth
    </ul>
</x-ui::header.dropdown.container>
