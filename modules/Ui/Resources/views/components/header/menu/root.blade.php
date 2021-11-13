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
                    <x-ui::header.menu.category :category="$category"/>
                @endif
            @endforeach()
        </div>
    @endif
@endif
