<button {{ $attributes->merge(['class' => 'form-submit', 'type' => 'submit']) }}
        @if((isset($disabled) && $disabled === true)) disabled @endif
>
    @if(isset($icon))
        {{ $icon }}
    @endif

    @if(isset($icon))
        <span class="hidden md:block md:ml-2">{{ $slot }}</span>
    @else
        {{ $slot }}
    @endif
</button>
