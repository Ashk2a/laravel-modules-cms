@component('mail::message')
# {{ $subject }}

@lang('emails.user_welcome.content')

@if (false === $completed)
@lang('emails.user_welcome.content_with_verification')
@component('mail::button', ['url' => $url])
    @lang('emails.user_welcome.verify_my_account')
@endcomponent
@endif

@endcomponent
