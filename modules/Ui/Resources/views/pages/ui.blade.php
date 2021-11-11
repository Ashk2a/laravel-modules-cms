@extends('ui::layouts.default')

@php
    $colors = ['red', 'lightBlue', 'gold', 'brown'];
    $types = ['', 'invert'];
    $sizes = ['xs', 'sm', 'base', 'xl', '2xl'];
@endphp

@section('content')
    <x-ui::section.top class="pb-10">
        <x-ui::section.boxed>
            <h1 class="text-2xl text-white">Button component</h1>

            <div class="grid grid-cols-4 gap-4">
                @foreach($colors as $color)
                    @foreach($types as $type)
                        <div class="col-span-1 space-y-2">
                            <h1 class="text-xl text-white">{{ ucfirst($color) . ' ' . $type }}</h1>
                            @foreach($sizes as $size)
                                <x-ui::button class="btn-{{ $size }} {{ !empty($type) ? 'btn-' . $color .'-' . $type : 'btn-' . $color}}">
                                    Button {{ $size }}
                                    <x-slot name="iconLeft">M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4</x-slot>
                                </x-ui::button>
                            @endforeach
                        </div>
                    @endforeach
                @endforeach
            </div>
        </x-ui::section.boxed>
    </x-ui::section.top>
@endsection
