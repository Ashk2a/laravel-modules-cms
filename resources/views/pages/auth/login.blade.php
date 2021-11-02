@extends('layouts.default')

@section('content')
    <x-section.top style="background-image: url('{{ asset('images/background/auth.jpg') }}')">
        <x-section.boxed class="px-5 py-6 max-w-[30rem] bg-brown-500 bg-opacity-95 border-[2px] border-brown-400 shadow-test">
            <h1 class="text-2xl text-white font-bold text-center mb-10">@lang('global.authentication')</h1>

            <x-form method="POST" :action="route('auth.login')">
                <x-form.group>
                    <x-form.input type="email" name="email" :label="trans('global.email')"/>
                </x-form.group>
                <x-form.group>
                    <x-form.input type="password" name="password" :label="trans('global.password')"/>
                </x-form.group>
                <x-form.group class="flex justify-between text-sm">
                    <div class="flex items-center">
                        <x-form.checkbox name="remember_me" :label="trans('global.remember_me')"></x-form.checkbox>
                    </div>
                </x-form.group>
                <x-form.group class="flex justify-center">
                    <x-form.submit class="btn-base btn-lightBlue w-full justify-center">@lang('global.login')</x-form.submit>
                </x-form.group>
            </x-form>

            <div class="flex items-center justify-between text-sm italic text-right text-sm italic text-gold-400 hover:text-gold-600 mt-6">
                <div class="flex">
                    <a href="{{ route('auth.forget') }}">@lang('global.forget_password')</a>
                </div>

                <div class="flex">
                    <a href="{{ route('auth.register') }}">@lang('global.already_have_an_account')</a>
                </div>
            </div>


        </x-section.boxed>
    </x-section.top>
@endsection
