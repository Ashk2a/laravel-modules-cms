@extends('ui::layouts.default')

@section('content')
    <x-ui::section.auth>
        <h1 class="text-2xl text-white font-bold text-center text-shadow mb-10">@lang('global.reset_my_password')</h1>

        {{--<livewire:auth.reset-password-component/>--}}
    </x-ui::section.auth>
@endsection
