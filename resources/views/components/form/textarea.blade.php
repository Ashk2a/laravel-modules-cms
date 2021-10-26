<div class="form-block-spacing-top">

    <x-form.label :label="$label" :required="$required"/>

    <textarea
        {{ $attributes->merge(['class' => 'form-item' . ($label ? ' form-label-space-y' : '')]) }}

        @if($isWired())
        wire:model{!! $wireModifier() !!}="{{ $name }}"
        @else
        name="{{ $name }}"
        @endif

        >@unless($isWired()){!! $value !!}@endunless</textarea>

    @if($hasErrorAndShow($name))
        <x-form.errors :name="$name"/>
    @endif
</div>
