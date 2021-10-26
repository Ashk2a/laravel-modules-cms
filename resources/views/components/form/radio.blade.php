<div>
    <div class="inline-flex items-center">
        <input {{ $attributes->merge(['class' => '']) }} type="radio"

            @if($isWired())
                wire:model{!! $wireModifier() !!}="{{ $name }}"
            @else
                name="{{ $name }}"
            @endif

            value="{{ $value }}"

            @if($checked)
                checked="checked"
            @endif
        />

        <x-form.label class="form-label-space-x" :for="$id" :label="$label"/>
    </div>

    @if($hasErrorAndShow($name))
        <x-form.errors :name="$name" />
    @endif
</div>
