@extends('ui::layouts.default')

@section('content')
    <x-ui::section.auth :xl="true">
        <h1 class="text-2xl text-white font-bold text-center mb-10 text-shadow">@lang('global.create_an_account')</h1>

        <livewire:auth::register-component/>
    </x-ui::section.auth>
@endsection
