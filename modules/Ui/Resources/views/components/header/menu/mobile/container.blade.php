<nav class="grid grid-cols-1 gap-y-2 w-full" x-data="{open: false}" @click.away="open = false">
    @foreach($roots as $root)
        <x-ui::header.menu.mobile.root :root="$root"/>
    @endforeach
</nav>