@component('mail::message')
# {{ $subject }}

@lang('auth::email.welcome.content')

@if (false === $completed)
@lang('auth::email.welcome.content_with_verification')
@component('mail::button', ['url' => $url])
    @lang('auth::email.welcome.verify_my_account')
@endcomponent
@endif

@endcomponent
