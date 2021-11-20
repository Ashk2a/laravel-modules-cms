<div class="relative hidden lg:flex justify-between items-center" :roots="[]" x-data="{ open: false }">
    @foreach($roots as $root)
        <x-ui::header.menu.root :root="$root"/>
    @endforeach
</div>
