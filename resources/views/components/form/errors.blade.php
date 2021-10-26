@error($name, $bag)
    <p {{ $attributes->merge(['class' => 'form-error']) }}>
        {{ $message }}
    </p>
@enderror
