@props(['active' => false, 'icon' => null, 'route' => null])

@php
    $route = locale()->localizeURL($route);
    $active = $route === request()->url();
@endphp

<li>
    <a href="{{ $route }}" @class([
        'border-transparent group inline-flex items-center py-4 px-1 border-b-[1px] text-xs md:text-sm',
        'text-gray-50 hover:text-gray-100 hover:border-gold-500 font-medium' => false === $active,
        'text-gold-500 border-gold-500 font-bold' => $active
    ])>
        @if (null !== $icon)
            <span class="-ml-0.5 mr-2 h-4 w-4">{{ $icon }}</span>
        @endif
        <span>{{ $slot }}</span>
    </a>
</li>

