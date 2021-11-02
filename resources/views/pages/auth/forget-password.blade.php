@extends('layouts.default')

@section('content')
    <x-section.auth>
        <h1 class="text-2xl text-white font-bold text-center mb-10">@lang('global.forget_my_password')</h1>

        <x-form method="POST" :action="route('auth.forget')">
            <x-form.group>
                <x-form.input type="email" name="email" :label="trans('global.email')"/>
            </x-form.group>
            <x-form.group class="flex justify-center">
                <x-form.submit class="btn-base btn-lightBlue w-full justify-center">@lang('global.send')</x-form.submit>
            </x-form.group>
        </x-form>
    </x-section.auth>
@endsection
