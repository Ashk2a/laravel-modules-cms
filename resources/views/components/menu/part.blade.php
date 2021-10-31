<ul class="relative flex justify-between items-center">
    {{ $slot }}

    <div class="absolute top-[4.85rem] p-6 grid grid-cols-2 gap-x-10 w-full bg-gradient-to-t from-brown-600-80a to-brown-600-80a">
        <div class="col-span-1">
            <h2 class="text-gray-50 font-medium">Category 1</h2>
            <div class="w-full bg-gold-900 h-[1px] mb-3"></div>

            <ul class="ml-4 space-y-2">
                @foreach(range(1, 3) as $k)
                    <li class="text-gold-400 hover:text-gray-50">
                        <a href="">
                            Subitem {{ $k }}
                        </a>
                    </li>
                @endforeach
            </ul>
        </div>
    </div>
</ul>
