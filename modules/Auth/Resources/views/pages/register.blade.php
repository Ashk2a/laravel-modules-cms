@extends('auth::layouts.default', ['xl' => true])

@section('auth_content')
    <h1 class="text-2xl text-white font-bold text-center mb-10 text-shadow">@lang('ui::global.create_an_account')</h1>

    <livewire:auth::register-form/>
@endsection
