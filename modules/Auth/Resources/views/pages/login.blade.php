@extends('auth::layouts.default')

@section('auth_content')
    <h1 class="text-2xl text-white font-bold text-center mb-10 text-shadow">@lang('auth::global.authentication')</h1>

    <livewire:auth::login-form/>

    <div class="flex items-center justify-between text-sm italic text-right text-sm italic text-gold-400 hover:text-gold-600 mt-6">
        <div class="flex">
            <a href="{{ locale()->localizeURL(route('auth.forget')) }}">@lang('auth::global.forget_password')</a>
        </div>

        <div class="flex">
            <a href="{{ locale()->localizeURL(route('auth.register')) }}">@lang('auth::global.already_have_an_account')</a>
        </div>
    </div>
@endsection
