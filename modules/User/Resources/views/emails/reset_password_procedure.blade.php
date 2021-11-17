@component('mail::message')
# {{ $subject }}

@lang('user::email.reset_password_procedure.content')

@component('mail::button', ['url' => $url])
    @lang('user::email.reset_password_procedure.reset_my_password')
@endcomponent

@lang('user::email.reset_password_procedure.advise')

@endcomponent
