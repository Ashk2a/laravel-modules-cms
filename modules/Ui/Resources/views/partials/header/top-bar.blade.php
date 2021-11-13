<div class="bg-darkGray-900 text-md border-b-[1px] border-gray-800">
    <x-ui::container.default class="flex h-[35px] items-center justify-between relative" x-data="{account: false}">
        <div class="flex flex-1 items-center justify-end">
            <a href=""
               @click.prevent="account = !account"
               @click.away="account = false"
               class="flex inline-flex justify-center items-center text-gray-300 hover:text-gray-50">
                <span class="flex">@if(auth()->check()) {{ auth()->user()->nickname }} @else @lang('auth::global.my_account') @endif</span>
                <x-heroicon-o-chevron-down class="h-4 w-4 flex ml-2"/>
            </a>
        </div>

        <div x-cloak x-show="account === true" class="absolute border-t-0 border-[1px] border-gray-800 top-0 mt-[35px] right-0 bg-darkGray-900 w-auto z-50">
            <ul class="flex justify-between flex-col w-full py-3 text-white">
                @guest
                    <li class="flex">
                        <a href="{{ locale()->localizeURL(route('auth.login')) }}" class="flex w-full bg-lightBlue-500 hover:bg-lightBlue-400 px-4 py-2">
                            @lang('auth::global.login')
                        </a>
                    </li>
                    <li class="flex">
                        <a href="{{ locale()->localizeURL(route('auth.register')) }}" class="flex w-full inline-flex items-center px-4 py-2 hover:bg-white hover:bg-opacity-5">
                            <x-heroicon-o-plus class="h-4 w-4 mr-2"/>
                            <span class="flex">@lang('auth::global.create_an_account')</span>
                        </a>
                    </li>
                @endguest

                @auth
                    @can('manager')
                        <li class="flex mb-3">
                            <a href="{{ locale()->localizeURL(route('auth.login')) }}" class="flex justify-center w-full bg-red-500 hover:bg-red-400 px-16 py-2">
                                Manager
                            </a>
                        </li>
                    @endcan
                    <li class="flex">
                        <a href="{{ locale()->localizeURL(route('auth.login')) }}" class="flex justify-center w-full bg-lightBlue-500 hover:bg-lightBlue-400 px-16 py-2">
                            @lang('auth::global.see_my_profile')
                        </a>
                    </li>
                    <li class="h-[1px] bg-darkGray-700 w-full my-3"></li>
                    <li class="text-base text-gold-400 pl-4 w-full pb-3">My panel</li>
                    <li>
                        <a href="#" class="flex w-full inline-flex items-center px-4 py-2 hover:bg-white hover:bg-opacity-5">
                            Overview
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex w-full inline-flex items-center px-4 py-2 hover:bg-white hover:bg-opacity-5">
                            Ingame accounts
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex w-full inline-flex items-center px-4 py-2 hover:bg-white hover:bg-opacity-5">
                            Preferences
                        </a>
                    </li>
                    <li class="h-[1px] bg-darkGray-700 w-full my-3"></li>
                    <li class="flex text-danger-400">
                        <a href="{{ locale()->localizeURL(route('auth.logout')) }}" class="flex w-full inline-flex items-center px-4 py-2 hover:bg-white hover:bg-opacity-5">
                            <span class="flex">@lang('auth::global.logout')</span>
                            <x-heroicon-o-logout class="h-4 w-4 ml-2"/>
                        </a>
                    </li>
                @endauth
            </ul>
        </div>
    </x-ui::container.default>
</div>
