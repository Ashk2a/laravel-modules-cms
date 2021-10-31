@php

@endphp

<header class="relative z-10">
    <nav class="fixed w-full" aria-label="top">
        <!-- Top navigation -->
        <div class="bg-gray-900 bg-opacity-50">
            <x-container.boxed class="flex h-[40px] items-center justify-between">
                <div class="flex flex-1 items-center justify-end">
                    <a href="" class="text-sm text-gray-300 hover:text-gray-50">ACCOUNT</a>
                </div>
            </x-container.boxed>
        </div>

        <!-- Secondary navigation -->
        <div class="bg-black bg-opacity-20">
            <x-container.boxed class="border-b-[1px] border-black border-opacity-20">
                <!-- Mobile menu (lg-) -->
                <div class="flex flex-1 items-center lg:hidden">
                    <button type="button" class="-ml-2 p-2 rounded-md text-gray-300">
                        <span class="sr-only">Open menu</span>

                        <x-heroicon class="h-6 w-6">
                            M4 6h16M4 12h16M4 18h16
                        </x-heroicon>
                    </button>
                </div>

                <!-- Menu -->
                <div class="hidden lg:grid lg:grid-cols-5">
                    <!-- Left -->
                    <div class="col-span-2">
                        <x-menu.part>
                            <x-menu.item title="News"></x-menu.item>
                            <x-menu.item title="Game" :children="['nothing']"></x-menu.item>
                            <x-menu.item title="Community" :children="['nothing']"></x-menu.item>
                        </x-menu.part>
                    </div>

                    <!-- Center - Logo -->
                    <div class="col-span-1">
                        <img src="{{ asset('images/logo/img.png') }}" class="absolute left-1/2 transform -translate-x-1/2 mt-[-40px] h-[12.5rem] xl:h-[15.5rem]" alt="Logo"/>
                    </div>

                    <!-- Right -->
                    <div class="col-span-2">
                        <x-menu.part>
                            <x-menu.item title="Vote"></x-menu.item>
                            <x-menu.item title="Shop"></x-menu.item>
                            <x-menu.item title="Admin" :children="['nothing']"></x-menu.item>
                        </x-menu.part>
                    </div>
                </div>
            </x-container.boxed>
        </div>
    </nav>
</header>
