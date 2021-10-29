<div class="form-block-spacing-top">
    <label class="inline-flex items-center">
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
        <span class="ml-2 text-white">{{ $label }}</span>
    </label>


    @if($hasErrorAndShow($name))
        <x-form.errors :name="$name"/>
    @endif
</div>

