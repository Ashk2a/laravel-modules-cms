<form method="{{ $spoofMethod ? 'POST' : $method }}" {{ $attributes }}>
    @unless(in_array($method, ['HEAD', 'GET', 'OPTIONS']))
        @csrf
    @endunless

    @if($spoofMethod)
        @method($method)
    @endif

    {!! $slot !!}

    @if ($showHelper === true)
        <div class="text-right text-sm mt-4"><span class="text-red-500">* </span>@lang('global.required_fields')</div>
    @endif
</form>
