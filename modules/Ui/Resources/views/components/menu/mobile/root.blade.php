@php
    $hasSub = $root->categories->isEmpty() === false;
@endphp

@if ($root->canShowed())
    <div class="col-span-1">
        <a href="{{ $root->getUrl() }}"
           @if($hasSub) @click.prevent="if (open === {{ $root->id }}) open = false; else open = {{ $root->id }}" @endif
           class="bg-black bg-opacity-20 text-white group w-full flex items-center pl-4 py-3 text-sm font-medium"
        >
            <span class="flex-1">{{ $root->name }}</span>

            @if ($hasSub)
                <svg
                    :class="{'rotate-90' : open === {{ $root->id }} }"
                    class="text-white ml-4 flex-shrink-0 h-5 w-5 mr-2" viewBox="0 0 20 20" aria-hidden="true"
                >
                    <path d="M6 6L14 10L6 14V6Z" fill="currentColor"/>
                </svg>
            @endif
        </a>

        @if ($hasSub)
            <div
                x-cloak
                x-show="open === {{ $root->id }}"
                class="space-y-1 pl-4"
            >
                @foreach($root->categories as $category)
                    @if ($category->canShowed())
                        <x-ui::menu.mobile.category :category="$category"/>
                    @endif
                @endforeach
            </div>
        @endif
    </div>
@endif

