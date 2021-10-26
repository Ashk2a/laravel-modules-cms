<div class="form-block-spacing-top">
    <x-form.label :label="$label" :required="true"/>

    <select
        {{ $attributes->merge(['class' => 'form-item form-select' . ($label ? ' form-label-space-y' : '')]) }}>

        @if($isWired())
            wire:model{!! $wireModifier() !!}="{{ $name }}"
        @else
            name="{{ $name }}"
        @endif

        @if($multiple)
            multiple
        @endif

        @if($disabled)
            disabled
        @endif

        @forelse($options as $key => $option)
            <option value="{{ $key }}" @if($isSelected($key)) selected="selected" @endif>
                {{ $option }}
            </option>
        @empty
            {!! $slot !!}
        @endforelse
    </select>

    @if($hasErrorAndShow($name))
        <x-form.errors :name="$name"/>
    @endif
</div>
