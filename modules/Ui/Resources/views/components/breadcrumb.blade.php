<nav {{ $attributes->merge(['class' => 'flex']) }} aria-label="Breadcrumb">
    <ol role="list" class="flex items-center space-x-2">
        <x-ui::breadcrumb.item :route="route('home')">@lang('ui::global.home')</x-ui::breadcrumb.item>
        {{ $slot }}
    </ol>
</nav>
