<x-form.label class="form-label-space-y" :for="$id" :label="$label" :required="$required"/>

<input {{ $attributes->merge([ 'class' => 'form-item form-input']) }}

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

