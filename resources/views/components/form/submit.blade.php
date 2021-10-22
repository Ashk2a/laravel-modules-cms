<button {!! $attributes->merge([
    'class' => 'disabled:opacity-50 mt-4 inline-flex items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500',
    'type' => 'submit'
]) !!} @if((isset($disabled) && $disabled === true)) disabled @endif>
    @if(isset($icon))
        {{ $icon }}
    @endif

    @if(isset($icon))
        <span class="hidden md:block md:ml-2">{{ $slot }}</span>
    @else
        {{ $slot }}
    @endif
</button>
