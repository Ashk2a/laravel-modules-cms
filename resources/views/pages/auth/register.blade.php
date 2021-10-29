@extends('layouts.default')

@section('content')
    <x-container.boxed>
        <h1>@lang('global.register')</h1>

        <x-form method="POST" :action="route('auth.register')">
            <x-form.input type="text" name="username" :label="trans('global.username')"/>
            <x-form.input type="text" name="nickname" :label="trans('global.nickname')"/>
            <x-form.input type="email" name="email" :label="trans('global.email')"/>
            <x-form.input type="password" name="password" :label="trans('global.password')"/>
            <x-form.input type="password" name="password_confirmation" :label="trans('global.password_confirmation')"/>
            <x-form.submit>@lang('global.register')</x-form.submit>
        </x-form>
    </x-container.boxed>
@endsection
