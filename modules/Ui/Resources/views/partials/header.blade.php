@php
    $leftRoots = \Modules\Ui\Models\MenuItem::buildTree([\Modules\Ui\Models\MenuItem::TYPE_ROOT_SIDE_LEFT]);
    $rightRoots = \Modules\Ui\Models\MenuItem::buildTree([\Modules\Ui\Models\MenuItem::TYPE_ROOT_SIDE_RIGHT])
@endphp

<header class="relative z-10">
    <nav class="fixed w-full" aria-label="top">
        <!-- Top navigation -->
        <div class="bg-darkGray-900 text-md border-b-[1px] border-gray-800">
            <x-ui::container.default class="flex h-[35px] items-center justify-between relative" x-data="{account: false}">
                <div class="flex flex-1 items-center justify-end">
                    <a href=""
                       @click.prevent="account = !account"
                       @click.away="account = false"
                       class="flex inline-flex justify-center items-center text-gray-300 hover:text-gray-50">
                        <span class="flex">@if(auth()->check()) {{ auth()->user()->nickname }} @else @lang('global.my_account') @endif</span>
                        <x-heroicon-o-chevron-down class="h-4 w-4 flex ml-2"/>
                    </a>
                </div>

                <div x-cloak x-show="account === true" class="absolute border-t-0 border-[1px] border-gray-800 top-0 mt-[35px] right-0 bg-darkGray-900 w-auto z-50">
                    <ul class="flex justify-between flex-col w-full py-3 text-white">
                        @guest
                            <li class="flex">
                                <a href="{{ locale()->localizeURL(route('auth.login')) }}" class="flex w-full bg-lightBlue-500 hover:bg-lightBlue-400 px-4 py-2">
                                    @lang('global.login')
                                </a>
                            </li>
                            <li class="flex">
                                <a href="{{ locale()->localizeURL(route('auth.register')) }}" class="flex w-full inline-flex items-center px-4 py-2 hover:bg-white hover:bg-opacity-5">
                                    <x-heroicon-o-plus class="h-4 w-4 mr-2"/>
                                    <span class="flex">@lang('global.create_an_account')</span>
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
                                    @lang('global.see_my_profile')
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
                                    <span class="flex">@lang('global.logout')</span>
                                    <x-heroicon-o-logout class="h-4 w-4 ml-2"/>
                                </a>
                            </li>
                        @endauth
                    </ul>
                </div>
            </x-ui::container.default>
        </div>

        <!-- Secondary navigation -->
        <div class="bg-brown-500 bg-opacity-90">
            <x-ui::container.default class="border-b-[1px] border-black border-opacity-20">
                <div class="grid grid-cols-5 lg:py-0 py-3">
                    <!-- Menu Left -->
                    <div class="col-span-2">
                        <x-ui::menu.nav :roots="$leftRoots"/>

                        <!-- Mobile menu (lg-) -->
                        <div class="flex flex-1 items-center lg:hidden">
                            <button type="button" class="-ml-2 p-2 rounded-md text-gold-300">
                                <x-ui::heroicon class="h-6 w-6 inline">
                                    M4 6h16M4 12h16M4 18h16
                                </x-ui::heroicon>

                                <span class="">Menu</span>
                            </button>
                        </div>
                    </div>

                    <!-- Center - Logo -->
                    <div class="col-span-1">
                        <a href="{{ locale()->localizeURL(route('home')) }}" class="hover:opacity-95">
                            <img src="{{ asset('images/logo/img.png') }}" class="absolute left-1/2 transform -translate-x-1/2 mt-[-45px] lg:mt-[-35px] h-[9.5rem] md:h-[13.5rem] xl:h-[14.5rem]" alt="Logo"/>
                        </a>
                    </div>

                    <!-- Menu Right -->
                    <div class="col-span-2">
                        <x-ui::menu.nav :roots="$rightRoots"/>
                    </div>
                </div>
            </x-ui::container.default>
        </div>
    </nav>
</header>
