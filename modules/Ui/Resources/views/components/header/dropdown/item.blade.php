@props(['iconRight' => null, 'iconLeft' => null, 'route' => '/'])

<li {{ $attributes->merge(['class' => 'flex']) }}>
    <a href="{{ locale()->localizeURL($route) }}" class="flex w-full inline-flex items-center px-4 py-2 hover:bg-white hover:bg-opacity-5">
        {{ $iconLeft }}
        <span class="flex">{{ $slot }}</span>
        {{ $iconRight }}
    </a>
</li>
