@extends('layouts.default')

@section('content')
    <x-section.top style="background-image: url('{{ asset('images/background/auth.jpg') }}')">
        <x-section.boxed class="px-5 py-6 max-w-[30rem] bg-brown-500 bg-opacity-95 border-[2px] border-brown-400 shadow-test">
            <h1 class="text-2xl text-white font-bold text-center mb-10">@lang('global.forget_my_password')</h1>

            <x-form method="POST" :action="route('auth.forget')">
                <x-form.group>
                    <x-form.input type="email" name="email" :label="trans('global.email')"/>
                </x-form.group>
                <x-form.group class="flex justify-center">
                    <x-form.submit class="btn-base btn-lightBlue w-full justify-center">@lang('global.send')</x-form.submit>
                </x-form.group>
            </x-form>
        </x-section.boxed>
    </x-section.top>
@endsection
