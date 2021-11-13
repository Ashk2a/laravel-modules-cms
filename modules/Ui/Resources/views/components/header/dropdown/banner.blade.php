@props(['route' => '/', 'color' => 'lightBlue'])

<li {{ $attributes->merge(['class' => 'flex']) }}>
    <a href="{{ locale()->localizeURL($route) }}" class="flex justify-center w-full bg-{{ $color }}-500 hover:bg-{{ $color  }}-400 px-16 py-2">
        {{ $slot }}
    </a>
</li>
