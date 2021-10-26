<div class="@if($type === 'hidden') hidden @else form-block-spacing-top @endif">

    <x-form.label :for="$id" :label="$label" :required="$required"/>

    <input {{ $attributes->merge([ 'class' => 'form-item form-input ' . ($label ? 'form-label-space-y' : '')]) }}

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
