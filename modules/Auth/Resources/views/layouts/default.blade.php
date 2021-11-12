@extends('ui::layouts.default')

@section('content')
    <x-ui::section.full style="background-image: url('{{ asset('images/background/auth.jpg') }}')">
        <x-ui::section.boxed class="px-5 py-6 bg-brown-500 bg-opacity-95 border-[2px] border-brown-400 {{ ($xl ?? false === true) ? 'max-w-[40rem]' :  'max-w-[30rem]'}}">
            @yield('auth_content')
        </x-ui::section.boxed>
    </x-ui::section.full>
@endsection
