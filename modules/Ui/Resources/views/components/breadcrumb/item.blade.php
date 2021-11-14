@props(['last' => false, 'route' => null])

<li>
    <div class="flex items-center">
        <a
            @if (null !== $route)href="{{ locale()->localizeURL($route) }}"@endif
            @class([
                'text-sm font-medium',
                'text-white' => $last,
                'text-gold-500 hover:text-gold-700' => false === $last
            ])>
            {{ $slot }}
        </a>

        @if (false === $last)
            <x-heroicon-o-chevron-right class="flex-shrink-0 h-4 w-4 text-white ml-2"/>
        @endif
    </div>
</li>
