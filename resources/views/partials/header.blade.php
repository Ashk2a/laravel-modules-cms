<!--
    Mobile menu

    Off-canvas menu for mobile, show/hide based on off-canvas menu state.
-->
<div class="fixed inset-0 flex z-40 lg:hidden" role="dialog" aria-modal="true">
    <!--
      Off-canvas menu overlay, show/hide based on off-canvas menu state.

      Entering: "transition-opacity ease-linear duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "transition-opacity ease-linear duration-300"
        From: "opacity-100"
        To: "opacity-0"
    -->
    <div class="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true"></div>

    <!--
      Off-canvas menu, show/hide based on off-canvas menu state.

      Entering: "transition ease-in-out duration-300 transform"
        From: "-translate-x-full"
        To: "translate-x-0"
      Leaving: "transition ease-in-out duration-300 transform"
        From: "translate-x-0"
        To: "-translate-x-full"
    -->
    <div class="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
        <div class="px-4 pt-5 pb-2 flex">
            <button type="button" class="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400">
                <span class="sr-only">Close menu</span>
                <!-- Heroicon name: outline/x -->
                <x-heroicon>
                    M6 18L18 6M6 6l12 12
                </x-heroicon>
            </button>
        </div>

        <!-- Links -->
        <div class="border-t border-gray-200 py-6 px-4 space-y-6">
            <div class="flow-root">
                <a href="#" class="-m-2 p-2 block font-medium text-gray-900">Company</a>
            </div>

            <div class="flow-root">
                <a href="#" class="-m-2 p-2 block font-medium text-gray-900">Stores</a>
            </div>
        </div>

        <div class="border-t border-gray-200 py-6 px-4 space-y-6">
            <div class="flow-root">
                <a href="#" class="-m-2 p-2 block font-medium text-gray-900">Create an account</a>
            </div>
            <div class="flow-root">
                <a href="#" class="-m-2 p-2 block font-medium text-gray-900">Sign in</a>
            </div>
        </div>

        <div class="border-t border-gray-200 py-6 px-4 space-y-6">
            <!-- Currency selector -->
            <form>
                <div class="inline-block">
                    <label for="mobile-currency" class="sr-only">Currency</label>
                    <div
                        class="-ml-2 group relative border-transparent rounded-md focus-within:ring-2 focus-within:ring-white">
                        <select id="mobile-currency" name="currency"
                                class="bg-none border-transparent rounded-md py-0.5 pl-2 pr-5 flex items-center text-sm font-medium text-gray-700 group-hover:text-gray-800 focus:outline-none focus:ring-0 focus:border-transparent">
                            <option>CAD</option>

                            <option>USD</option>

                            <option>AUD</option>

                            <option>EUR</option>

                            <option>GBP</option>
                        </select>
                        <div class="absolute right-0 inset-y-0 flex items-center pointer-events-none">
                            <x-heroicon class="w-5 h-5 text-gray-500">
                                M6 8l4 4 4-4
                            </x-heroicon>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>

<header class="relative z-10">
    <nav aria-label="top">
        <!-- Top navigation -->
        <div class="bg-gray-900">
            <x-container.boxed class="flex h-10 items-center justify-between">
                <div class="flex flex-1 items-center justify-end space-x-6">
                    <a href="#" class="text-sm font-medium text-white hover:text-gray-100">Create an account</a>
                    <span class="h-6 w-px bg-gray-600" aria-hidden="true"></span>
                    <a href="#" class="text-sm font-medium text-white hover:text-gray-100">Sign in</a>
                </div>
            </x-container.boxed>
        </div>

        <!-- Secondary navigation -->
        <div class="bg-white">
            <div class="border-b border-gray-200">
                <x-container.boxed>
                    <div class="h-16 flex items-center justify-between">
                        <!-- Logo (lg+) -->
                        <div class="hidden lg:flex lg:items-center">
                            <a href="#">
                                <span class="sr-only">Workflow</span>
                                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600" alt="">
                            </a>
                        </div>

                        <div class="hidden h-full lg:flex">
                            <div class="ml-8">
                                <div class="h-full flex justify-center space-x-8">
                                    <a href="#" class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
                                        Item1
                                    </a>

                                    <a href="#" class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
                                        Item2
                                    </a>
                                </div>
                            </div>
                        </div>

                        <!-- Mobile menu and search (lg-) -->
                        <div class="flex-1 flex items-center lg:hidden">
                            <!-- Mobile menu toggle, controls the 'mobileMenuOpen' state. -->
                            <button type="button" class="-ml-2 bg-white p-2 rounded-md text-gray-400">
                                <span class="sr-only">Open menu</span>
                                <!-- Heroicon name: outline/menu -->
                                <x-heroicon class="h-6 w-6">
                                    M4 6h16M4 12h16M4 18h16
                                </x-heroicon>
                            </button>

                            <!-- Search -->
                            <a href="#" class="ml-2 p-2 text-gray-400 hover:text-gray-500">
                                <span class="sr-only">Search</span>
                                <!-- Heroicon name: outline/search -->
                                <x-heroicon class="h-6 w-6">
                                    M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z
                                </x-heroicon>
                            </a>
                        </div>

                        <!-- Logo (lg-) -->
                        <a href="#" class="lg:hidden">
                            <span class="sr-only">Workflow</span>
                            <img src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600" alt="" class="h-8 w-auto">
                        </a>

                        <div class="flex-1 flex items-center justify-end">
                            <div class="flex items-center lg:ml-8">
                                <div class="flex space-x-8">
                                    <div class="flex">
                                        <a href="#" class="-m-2 p-2 text-gray-400 hover:text-gray-500">
                                            <span class="sr-only">Account</span>
                                            <!-- Heroicon name: outline/user -->
                                            <x-heroicon class="h-6 w-6">
                                                M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z
                                            </x-heroicon>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </x-container.boxed>
            </div>
        </div>
    </nav>
</header>
