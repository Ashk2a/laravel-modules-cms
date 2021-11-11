@extends('ui::layouts.default')

@section('content')
    <x-ui::section.auth>
            <h1 class="text-2xl text-white font-bold text-center mb-10 text-shadow">@lang('global.authentication')</h1>

            <livewire:auth::login-component/>

            <div class="flex items-center justify-between text-sm italic text-right text-sm italic text-gold-400 hover:text-gold-600 mt-6">
                <div class="flex">
                    <a href="{{ locale()->localizeURL(route('auth.forget')) }}">@lang('global.forget_password')</a>
                </div>

                <div class="flex">
                    <a href="{{ locale()->localizeURL(route('auth.register')) }}">@lang('global.already_have_an_account')</a>
                </div>
            </div>
    </x-ui::section.auth>
@endsection
