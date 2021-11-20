<nav class="grid grid-cols-1 border-t-[1px] border-b-[1px] border-black border-opacity-20 divide-y-[1px] divide-black divide-opacity-20 w-full px-0" x-data="{open: false}" @click.away="open = false">
    @foreach($roots as $root)
        <x-ui::header.menu.mobile.root :root="$root"/>
    @endforeach
</nav>
