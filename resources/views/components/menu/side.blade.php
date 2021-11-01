<div class="relative flex justify-between items-center" :roots="[]" x-data="{ open: false }">
    @foreach($roots as $root)
        <x-menu.root :root="$root"/>
    @endforeach
</div>
