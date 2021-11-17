@component('mail::message')
# {{ $subject }}

@lang('user::email.welcome.content')

@if (false === $completed)
@lang('user::email.welcome.content_with_verification')
@component('mail::button', ['url' => $url])
    @lang('user::email.welcome.verify_my_account')
@endcomponent
@endif

@endcomponent
