@error($name, $bag)
    <p {!! $attributes->merge(['class' => 'text-red-500 text-sm italic']) !!}>
        {{ $message }}
    </p>
@enderror
