<div class="form-block-spacing-top">
    <input {{ $attributes->merge(['class' => 'form-checkbox']) }}
           type="checkbox"
           value="{{ $value }}"

           @if($isWired())
           wire:model{!! $wireModifier() !!}="{{ $name }}"
           @else
           name="{{ $name }}"
           @endif
           id="{{ $id }}"
           @if($checked)
           checked="checked"
        @endif
    />

    <x-form.label class="ml-2" :for="$id" :label="$label" :required="$required"/>


    @if($hasErrorAndShow($name))
        <x-form.errors :name="$name"/>
    @endif
</div>

