@component('mail::message')
# {{ $subject }}

@lang('auth::email.reset_password_procedure.content')

@component('mail::button', ['url' => $url])
    @lang('auth::email.reset_password_procedure.reset_my_password')
@endcomponent

@lang('auth::email.reset_password_procedure.advise')

@endcomponent
