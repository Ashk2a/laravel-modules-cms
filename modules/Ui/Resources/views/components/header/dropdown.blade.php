@props(['iconRight' => null, 'iconLeft' => null])

<a href="" {{ $attributes->merge(['class' => 'flex inline-flex justify-center items-center text-gray-300 hover:text-gray-50']) }}>
    {{ $iconLeft }}
    <span class="flex">{{ $slot }}</span>
    {{ $iconRight }}
</a>
