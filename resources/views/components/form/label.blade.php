@if($label)
    <label {{ $attributes->merge(['class' => 'form-label']) }}>
        {{ $label }} @if($required)<span class="form-item-required">*</span>@endif
    </label>
@endif
