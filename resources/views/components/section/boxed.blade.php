<x-container.boxed>
    <div {{ $attributes->merge(['class' => 'mx-auto']) }}>
        {{ $slot }}
    </div>
</x-container.boxed>
