@extends('ui::layouts.default')

@section('content')
    <x-ui::section.top class="bg-opacity-20 pb-10" style="background-image: url('{{ asset('images/background/home.jpg') }}')">
        <x-ui::section.boxed class="">

        </x-ui::section.boxed>

        <x-news::latest/>
    </x-ui::section.top>
@endsection
