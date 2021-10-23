@extends('layouts.default')

@section('content')
    <x-container.boxed>
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <x-form method="POST" :action="route('auth.login')">
                    <x-form.input type="email" name="email" :label="trans('global.email')"/>
                    <x-form.input type="password" name="password" :label="trans('global.password')"/>

                    <div class="flex items-center justify-between mt-4">
                        <div class="flex items-center">
                            <x-form.checkbox name="remember_me" :label="trans('global.remember_me')"></x-form.checkbox>
                        </div>

                        <div class="text-sm">
                            <a href="#" class="font-medium text-gray-500 hover:text-gray-700">
                                @lang('global.forget_password')
                            </a>
                        </div>
                    </div>

                    <x-form.submit class="w-full flex justify-center">@lang('global.login')</x-form.submit>
                </x-form>
            </div>
        </div>
    </x-container.boxed>
@endsection
