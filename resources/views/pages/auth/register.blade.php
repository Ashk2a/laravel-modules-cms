@extends('layouts.default')

@section('content')
    <x-section.auth :xl="true">
        <h1 class="text-2xl text-white font-bold text-center mb-10">@lang('global.create_an_account')</h1>

        <x-form class="grid grid-cols-2 gap-x-4" method="POST" :action="route('auth.register')">
            <x-form.group class="col-span-2">
                <x-form.input type="email" name="email" :label="trans('global.email')"/>
            </x-form.group>
            <x-form.group class="col-span-2 md:col-span-1">
                <x-form.input type="text" name="username" :label="trans('global.username')"/>
            </x-form.group>
            <x-form.group class="col-span-2 md:col-span-1">
                <x-form.input type="text" name="nickname" :label="trans('global.nickname')"/>
            </x-form.group>
            <x-form.group class="col-span-2 md:col-span-1">
                <x-form.input type="password" name="password" :label="trans('global.password')"/>
            </x-form.group>
            <x-form.group class="col-span-2 md:col-span-1">
                <x-form.input type="password" name="password_confirmation" :label="trans('global.password_confirmation')"/>
            </x-form.group>
            <x-form.group class="flex justify-center col-span-2">
                <x-form.submit class="btn-base btn-lightBlue w-full justify-center">@lang('global.register')</x-form.submit>
            </x-form.group>
        </x-form>

        <div class="mt-4 text-right text-sm italic text-gold-400 hover:text-gold-600">
            <a href="{{ route('auth.login') }}">Already have an account ?</a>
        </div>
    </x-section.auth>
@endsection
