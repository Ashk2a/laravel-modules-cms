@extends('layouts.default')

@section('content')
    <x-container.boxed>
        <h1>@lang('global.reset_my_password')</h1>

        <x-form method="POST" :action="route('auth.reset', ['reminder' => $reminder])">
            <x-form.input type="password" name="new_password" :label="trans('global.new_password')"/>
            <x-form.input type="password" name="new_password_confirmation" :label="trans('global.new_password_confirmation')"/>
            <x-form.submit>@lang('global.reset_my_password')</x-form.submit>
        </x-form>
    </x-container.boxed>
@endsection
