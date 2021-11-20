<h2 class="flex items-center pl-2 pr-2 pt-2 pb-1 text-sm font-bold text-white">{{ $category->name }}</h2>

@foreach($category->items as $item)
    @if ($item->canShowed())
        <x-ui::header.menu.mobile.item :item="$item"/>
    @endif
@endforeach
