<div class="@if($type === 'hidden') hidden @else mt-4 @endif">

    <x-form.label :for="$id" :label="$label" :required="$required"/>

    <input
        {!! $attributes->merge([ 'class' => 'appearance-none block w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm ' . ($label ? 'mt-1' : '')]) !!}

        @if($isWired())
            wire:model{!! $wireModifier() !!}="{{ $name }}"
        @else
            name="{{ $name }}"
            value="{{ $value }}"
        @endif

        type="{{ $type }}"

        @if($required)
            required
        @endif

        @if($disabled === true)
            disabled
        @endif
    />

    @if($hasErrorAndShow($name))
        <x-form.errors :name="$name"/>
    @endif

</div>
