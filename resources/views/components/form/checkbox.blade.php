<input {!! $attributes->merge(['class' => 'h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded']) !!}
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

