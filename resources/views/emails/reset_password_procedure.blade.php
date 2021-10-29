@component('mail::message')
# {{ $subject }}

@lang('emails.reset_password_procedure.content')

@component('mail::button', ['url' => $url])
    @lang('emails.reset_password_procedure.reset_my_password')
@endcomponent

@lang('emails.reset_password_procedure.advise')

@endcomponent
