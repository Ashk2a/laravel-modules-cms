<div class="mt-4">
    <x-form.label :label="$label" :required="true"/>

    <select
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

        {!! $attributes->merge([
            'class' => ($label ? 'mt-1' : '') . ' block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md'
        ]) !!}>
        @forelse($options as $key => $option)
            <option value="{{ $key }}" @if($isSelected($key)) selected="selected" @endif>
                {{ $option }}
            </option>
        @empty
            {!! $slot !!}
        @endforelse
    </select>

    @if($hasErrorAndShow($name))
        <x-form.errors :name="$name" />
    @endif
</div>
