@component('mail::message')
# {{ $subject }}

@lang('emails.welcome.content')

@if (false === $completed)
@lang('emails.welcome.content_with_verification')
@component('mail::button', ['url' => $url])
    @lang('emails.welcome.verify_my_account')
@endcomponent
@endif

@endcomponent
