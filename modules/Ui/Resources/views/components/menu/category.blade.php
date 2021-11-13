<div class="col-span-1">
    <h2 class="text-gray-50 font-medium xl:text-base text-sm">{{ $category->name }}</h2>
    <div class="w-full bg-gold-900 h-[1px] mb-3"></div>

    <ul class="ml-4 space-y-2">
        @foreach($category->items as $item)
            @if($item->canShowed())
                <x-ui::menu.item :item="$item"/>
            @endif
        @endforeach
    </ul>
</div>
