@extends('layouts.default')

@section('content')
    <x-container.boxed>
        <h1>Forget password ?</h1>

        <x-form method="POST" :action="route('auth.forget')">
            <x-form.input type="email" name="email" :label="trans('global.email')"/>
            <x-form.submit>@lang('global.send')</x-form.submit>
        </x-form>
    </x-container.boxed>
@endsection
