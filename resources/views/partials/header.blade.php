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
            <x-container.boxed>
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
                        <ul class="flex justify-between items-center">
                            <li class="flex justify-center items-center group w-full border-transparent border-b-2 hover:border-gold-500 hover:bg-black hover:bg-opacity-10">
                                <a href="#" class="flex inline-flex justify-center items-center w-full text-lg text-transparent bg-clip-text bg-gradient-to-b from-gold-500 to-gold-50 py-[1.5rem] group-hover:text-gray-50">
                                    <span>News</span>
                                </a>
                            </li>
                            <li class="flex justify-center items-center group w-full border-transparent border-b-2 hover:border-gold-500 hover:bg-black hover:bg-opacity-10">
                                <a href="#" class="flex inline-flex justify-center items-center w-full text-lg text-transparent bg-clip-text bg-gradient-to-b from-gold-500 to-gold-50 py-[1.5rem] group-hover:text-gray-50">
                                    <span>Game</span>
                                    <x-heroicon class="h-4 w-4 ml-2 text-gold-300 group-hover:text-gray-50">
                                        M19 9l-7 7-7-7
                                    </x-heroicon>
                                </a>
                            </li>
                            <li class="flex justify-center items-center group w-full border-transparent border-b-2 hover:border-gold-500 hover:bg-black hover:bg-opacity-10">
                                <a href="#" class="flex inline-flex justify-center items-center w-full text-lg text-transparent bg-clip-text bg-gradient-to-b from-gold-500 to-gold-50 py-[1.5rem] group-hover:text-gray-50">
                                    <span>Community</span>
                                    <x-heroicon class="h-4 w-4 ml-2 text-gold-300 group-hover:text-gray-50">
                                        M19 9l-7 7-7-7
                                    </x-heroicon>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <!-- Center - Logo -->
                    <div class="col-span-1">
                        <img src="{{ asset('images/logo/img.png') }}" class="absolute left-1/2 transform -translate-x-1/2 mt-[-40px]  h-[15.5rem]" alt="Logo"/>
                    </div>

                    <!-- Right -->
                    <div class="col-span-2">
                        <ul class="flex justify-between items-center">
                            <li class="flex justify-center items-center group w-full border-transparent border-b-2 hover:border-gold-500 hover:bg-black hover:bg-opacity-10">
                                <a href="#" class="flex inline-flex justify-center items-center w-full text-lg text-transparent bg-clip-text bg-gradient-to-b from-gold-500 to-gold-50 py-[1.5rem] group-hover:text-gray-50">
                                    <span>News</span>
                                </a>
                            </li>
                            <li class="flex justify-center items-center group w-full border-transparent border-b-2 hover:border-gold-500 hover:bg-black hover:bg-opacity-10">
                                <a href="#" class="flex inline-flex justify-center items-center w-full text-lg text-transparent bg-clip-text bg-gradient-to-b from-gold-500 to-gold-50 py-[1.5rem] group-hover:text-gray-50">
                                    <span>Game</span>
                                    <x-heroicon class="h-4 w-4 ml-2 text-gold-300 group-hover:text-gray-50">
                                        M19 9l-7 7-7-7
                                    </x-heroicon>
                                </a>
                            </li>
                            <li class="flex justify-center items-center group w-full border-transparent border-b-2 hover:border-gold-500 hover:bg-black hover:bg-opacity-10">
                                <a href="#" class="flex inline-flex justify-center items-center w-full text-lg text-transparent bg-clip-text bg-gradient-to-b from-gold-500 to-gold-50 py-[1.5rem] group-hover:text-gray-50">
                                    <span>Community</span>
                                    <x-heroicon class="h-4 w-4 ml-2 text-gold-300 group-hover:text-gray-50">
                                        M19 9l-7 7-7-7
                                    </x-heroicon>
                                </a>
                            </li>
                        </ul>
                    </div>


                </div>


            </x-container.boxed>
        </div>
    </nav>
</header>
