@extends('layouts.default')

@section('content')
    <x-section.auth>
        <h1 class="text-2xl text-white font-bold text-center text-shadow mb-10">@lang('global.forget_my_password')</h1>

        <livewire:auth.forget-password-component/>
    </x-section.auth>
@endsection
