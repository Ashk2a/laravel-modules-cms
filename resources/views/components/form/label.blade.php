@if($label)
    <label {!! $attributes->merge(['class' => 'block text-sm font-medium text-gray-700']) !!}>{{ $label }} @if($required)<span class="text-red-500">*</span>@endif
    </label>
@endif
