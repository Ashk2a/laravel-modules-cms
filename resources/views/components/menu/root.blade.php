<div
    @mouseover="open = {{ $root->id }}"
    @mouseleave="open = false"
    :class="{'border-gold-500 bg-gradient-to-b from-brown-600-03a to-brown-600-80a' : open === {{ $root->id }} }"
    class="flex justify-center items-center group w-full border-transparent border-b-2 hover:border-gold-500 hover:bg-gradient-to-b hover:from-brown-600-03a hover:to-brown-600-80a"
>
    <a
        href="#"
        :class="{'text-gray-50' : open === {{ $root->id }} }"
        class="flex inline-flex justify-center items-center w-full text-lg font-medium text-transparent bg-clip-text bg-gradient-to-b from-gold-500 to-gold-50 py-[1.5rem] group-hover:text-gray-50"
    >
        <span>{{ $root->name }}</span>

        @if (false === $root->categories->isEmpty())
            <x-heroicon
                x-bind:class="{'text-gray-50' : open === {{ $root->id }} }"
                class="h-4 w-4 ml-2 text-gold-300 group-hover:text-gray-50"
            >
                M19 9l-7 7-7-7
            </x-heroicon>
        @endif
    </a>
</div>

@if(false === $root->categories->isEmpty())
    <div
        x-cloak
        @mouseover="open = {{ $root->id }}"
        @mouseleave="open = false"
        x-show="open === {{ $root->id }}"
        class="absolute top-[4.80rem] p-6 grid grid-cols-2 gap-x-10 w-full bg-gradient-to-t from-brown-600-80a to-brown-600-80a"
    >
        @foreach($root->categories as $category)
            <div class="col-span-1">
                <h2 class="text-gray-50 font-medium">{{ $category->name }}</h2>
                <div class="w-full bg-gold-900 h-[1px] mb-3"></div>

                <ul class="ml-4 space-y-2">
                    @foreach($category->items as $item)
                        <li class="text-gold-400 hover:text-gray-50">
                            <a href="">{{ $item->name }}</a>
                        </li>
                    @endforeach
                </ul>
            </div>
        @endforeach()
    </div>
@endif
