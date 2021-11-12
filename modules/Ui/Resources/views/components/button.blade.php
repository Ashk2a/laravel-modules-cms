<button {{ $attributes->merge(['class' => 'btn']) }} @if((isset($disabled) && $disabled === true)) disabled @endif>
    @if (isset($iconLeft))
        <x-ui::heroicon class="btn-icon mr-2">{{ $iconLeft }}</x-ui::heroicon>
    @endif

    <span>{{ $slot }}</span>

    @if (isset($iconRight))
        <x-ui::heroicon class="btn-icon ml-2">{{ $iconRight }}</x-ui::heroicon>
    @endif
</button>
