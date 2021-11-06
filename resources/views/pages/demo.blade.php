@extends('layouts.default')

@php
    $colors = ['red', 'lightBlue', 'gold', 'brown'];
    $types = ['', 'invert'];
    $sizes = ['xs', 'sm', 'base', 'xl', '2xl'];
@endphp

@section('content')
    <x-section.top class="pb-10">
        <x-section.boxed>
            <h1 class="text-2xl">Button component</h1>

            <div class="grid grid-cols-4 gap-4">
                @foreach($colors as $color)
                    @foreach($types as $type)
                        <div class="col-span-1 space-y-2">
                            <h1 class="text-xl">{{ ucfirst($color) . ' ' . $type }}</h1>
                            @foreach($sizes as $size)
                                <x-button class="btn-{{ $size }} {{ !empty($type) ? 'btn-' . $color .'-' . $type : 'btn-' . $color}}">
                                    Button {{ $size }}
                                    <x-slot name="iconLeft">M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4</x-slot>
                                </x-button>
                            @endforeach
                        </div>
                    @endforeach
                @endforeach
            </div>

            <h1 class="text-2xl">Form components</h1>

            <x-form>
                <x-form.input type="email" label="Email"/>
                <x-form.input type="text" label="Text"/>
                <x-form.input type="number" label="Number"/>
                <x-form.radio name="radio" label="Checkbox"/>
                <x-form.select name="select" label="Select" :options="[1 => 'Test', 2 => 'Test2', 3 => 'Toto']"/>
                <x-form.textarea name="textarea" label="Textarea">Test</x-form.textarea>
                <x-form.submit>Submit</x-form.submit>
            </x-form>
        </x-section.boxed>
    </x-section.top>

@endsection
