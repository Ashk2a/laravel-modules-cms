@php
    $menu = \App\Models\MenuItem::buildTree();
    $leftRoots = $menu->where('type', \App\Models\MenuItem::TYPE_ROOT_SIDE_LEFT);
    $rightRoots = $menu->where('type', \App\Models\MenuItem::TYPE_ROOT_SIDE_RIGHT);
@endphp

<header class="relative z-10">
    <nav class="fixed w-full" aria-label="top">
        <!-- Top navigation -->
        <div class="bg-gray-900 bg-opacity-90">
            <x-container.boxed class="flex h-[30px] items-center justify-between">
                <div class="flex flex-1 items-center justify-end">
                    {{--<a href="" class="text-sm text-gray-300 hover:text-gray-50">ACCOUNT</a>--}}
                </div>
            </x-container.boxed>
        </div>

        <!-- Secondary navigation -->
        <div class="bg-brown-500 bg-opacity-90">
            <x-container.boxed class="border-b-[1px] border-black border-opacity-20">
                <div class="grid grid-cols-5 lg:py-0 py-3">
                    <!-- Menu Left -->
                    <div class="col-span-2">
                        <x-menu.side :roots="$leftRoots"/>

                        <!-- Mobile menu (lg-) -->
                        <div class="flex flex-1 items-center lg:hidden">
                            <button type="button" class="-ml-2 p-2 rounded-md text-gold-300">
                                <x-heroicon class="h-6 w-6 inline">
                                    M4 6h16M4 12h16M4 18h16
                                </x-heroicon>

                                <span class="">Menu</span>
                            </button>
                        </div>
                    </div>

                    <!-- Center - Logo -->
                    <div class="col-span-1">
                        <img src="{{ asset('images/logo/img.png') }}" class="absolute left-1/2 transform -translate-x-1/2 mt-[-40px] lg:mt-[-30px] h-[9.5rem] md:h-[13.5rem] xl:h-[14.5rem]" alt="Logo"/>
                    </div>

                    <!-- Menu Right -->
                    <div class="col-span-2">
                        <x-menu.side :roots="$rightRoots"/>
                    </div>
                </div>
            </x-container.boxed>
        </div>
    </nav>
</header>
