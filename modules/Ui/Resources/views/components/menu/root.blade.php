@if($root->canShowed())
    <div
        @mouseover="open = {{ $root->id }}"
        @mouseleave="open = false"
        :class="{'menu-root-open' : open === {{ $root->id }} }"
        class="menu-root group"
    >
        <a
            href="{{ $root->getUrl() }}"
            @if (false === $root->categories->isEmpty()) @click.prevent="" @endif
            :class="{'text-gray-50' : open === {{ $root->id }}, 'text-transparent bg-clip-text bg-gradient-to-b from-gold-500 to-gold-50' : open !== {{ $root->id }} }"
            class="menu-root-item"
        >
            <span>{{ $root->name }}</span>

            @if (false === $root->categories->isEmpty())
                <x-ui::heroicon
                    x-bind:class="{'text-gray-50' : open === {{ $root->id }}, 'text-gold-300' : open !== {{ $root->id }} }"
                    class="menu-root-icon"
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
            class="menu-dropdown"
        >
            @foreach($root->categories as $category)
                @if($category->canShowed())
                    <div class="col-span-1">
                        <h2 class="text-gray-50 font-medium xl:text-base text-sm">{{ $category->name }}</h2>
                        <div class="w-full bg-gold-900 h-[1px] mb-3"></div>

                        <ul class="ml-4 space-y-2">
                            @foreach($category->items as $item)
                                @if($item->canShowed())
                                    <li class="text-gold-400 hover:text-gray-50 xl:text-base text-sm">
                                        <a href="{{ $item->getUrl() }}" class="">{{ $item->name }}</a>
                                    </li>
                                @endif
                            @endforeach
                        </ul>
                    </div>
                @endif
            @endforeach()
        </div>
    @endif
@endif
