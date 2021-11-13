<div class="menu-side" :roots="[]" x-data="{ open: false }">
    @foreach($roots as $root)
        <x-ui::menu.root :root="$root"/>
    @endforeach
</div>
