<button {{ $attributes->merge(['class' => 'btn']) }} @if((isset($disabled) && $disabled === true)) disabled @endif>
    @if (isset($iconLeft))
        <x-heroicon class="btn-icon mr-2">{{ $iconLeft }}</x-heroicon>
    @endif

    <span>{{ $slot }}</span>

    @if (isset($iconRight))
        <x-heroicon class="btn-icon ml-2">{{ $iconRight }}</x-heroicon>
    @endif
</button>
