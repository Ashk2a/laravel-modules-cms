@extends('auth::layouts.default')

@section('auth_content')
    <h1 class="text-2xl text-white font-bold text-center text-shadow mb-10">@lang('ui::global.reset_my_password')</h1>

    <livewire:auth::reset-password-form/>
@endsection
