@if($root->canShowed())
    <div
        @mouseover="open = {{ $root->id }}"
        @mouseleave="open = false"
        :class="{'border-gold-500 bg-gradient-to-b from-brown-600-03a to-brown-600-80a text-gray-50' : open === {{ $root->id }} }"
        class="group flex justify-center items-center w-full
            border-transparent border-b-2"
    >
        <a
            href="{{ $root->getUrl() }}"
            @if (false === $root->categories->isEmpty()) @click.prevent="" @endif
            :class="{'text-gray-50' : open === {{ $root->id }}, 'text-transparent bg-clip-text bg-gradient-to-b from-gold-500 to-gold-50' : open !== {{ $root->id }} }"
            class="flex inline-flex justify-center items-center
                w-full py-[1.5rem]
                text-sm xl:text-lg font-medium
                group-hover:text-gray-50"
        >
            <span>{{ $root->name }}</span>

            @if (false === $root->categories->isEmpty())
                <x-ui::heroicon
                    x-bind:class="{'text-gray-50' : open === {{ $root->id }}, 'text-gold-300' : open !== {{ $root->id }} }"
                    class="h-4 w-4 ml-2 group-hover:text-gray-50"
                >
                    M19 9l-7 7-7-7
                </x-ui::heroicon>
            @endif
        </a>
    </div>

    @if(false === $root->categories->isEmpty())
        <div
            x-cloak
            @mouseover="open = {{ $root->id }}"
            @mouseleave="open = false"
            x-show="open === {{ $root->id }}"
            class="absolute xl:top-[4.80rem] top-[4.3rem] p-6 w-full
                grid grid-cols-2 xl:gap-x-10 gap-x-6
                bg-gradient-to-b from-brown-600-95a to-brown-600"
        >
            @foreach($root->categories as $category)
                @if($category->canShowed())
                    <x-ui::header.menu.category :category="$category"/>
                @endif
            @endforeach()
        </div>
    @endif
@endif
