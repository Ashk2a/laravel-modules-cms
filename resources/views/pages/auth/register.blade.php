@extends('layouts.default')

@section('content')
    <x-section.top style="background-image: url('{{ asset('images/background/bg-2.jpg') }}')">
        <x-section.boxed class="px-5 py-6 max-w-[30rem] bg-brown-500 bg-opacity-95 border-[2px] border-brown-400 shadow-test">
            <h1 class="text-2xl text-white font-bold text-center mb-10">Create an account</h1>

            <x-form method="POST" :action="route('auth.register')" :showHelper="true">
                <x-form.input type="text" name="username" :label="trans('global.username')"/>
                <x-form.input type="text" name="nickname" :label="trans('global.nickname')"/>
                <x-form.input type="email" name="email" :label="trans('global.email')"/>
                <x-form.input type="password" name="password" :label="trans('global.password')"/>
                <x-form.input type="password" name="password_confirmation" :label="trans('global.password_confirmation')"/>
                <div class="flex justify-center">
                    <x-form.submit class="btn-base btn-lightBlue w-full">@lang('global.register')</x-form.submit>
                </div>
            </x-form>
        </x-section.boxed>
    </x-section.top>
@endsection
