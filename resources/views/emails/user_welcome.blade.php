@component('mail::message')
# {{ $subject }}

@lang('emails.user_welcome.content')

@if (false === $verification->completed)
@lang('emails.user_welcome.content_with_verification')
@component('mail::button', ['url' => $verification->getUrl()])
    @lang('emails.user_welcome.verify_my_account')
@endcomponent
@endif

@endcomponent
