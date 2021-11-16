@props(['route' => '/', 'bg' => 'red'])

<li {{ $attributes->merge(['class' => 'flex']) }}>
    <a href="{{ locale()->localizeURL($route) }}" @class([
        'flex justify-center w-full px-16 py-2',
        'bg-red-500 hover:bg-red-400' => $bg === 'red',
        'bg-lightBlue-500 hover:bg-lightBlue-400' => $bg === 'lightBlue'
    ])>
        {{ $slot }}
    </a>
</li>
