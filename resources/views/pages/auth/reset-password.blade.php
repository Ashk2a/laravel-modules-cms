@extends('layouts.default')

@section('content')
    <x-section.auth>
        <h1 class="text-2xl text-white font-bold text-center mb-10">@lang('global.reset_my_password')</h1>

        <x-form method="POST" :action="route('auth.reset', ['reminder' => $reminder])">
            <x-form.group>
                <x-form.input type="email" name="email" :label="trans('global.email')" :disabled="true" :value="$reminder->user->email" :required="false"/>
            </x-form.group>
            <x-form.group>
                <x-form.input type="password" name="new_password" :label="trans('global.new_password')"/>
            </x-form.group>
            <x-form.group>
                <x-form.input type="password" name="new_password_confirmation" :label="trans('global.new_password_confirmation')"/>
            </x-form.group>
            <x-form.group class="flex justify-center">
                <x-form.submit class="btn-base btn-lightBlue w-full justify-center">@lang('global.reset_now')</x-form.submit>
            </x-form.group>
        </x-form>
    </x-section.auth>
@endsection
