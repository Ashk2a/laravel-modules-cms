<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <title>{{ config('app.name') }}</title>

    <meta charset="utf-8">
    <meta name="application-name" content="{{ config('app.name') }}">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    @livewireStyles

    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    @stack('styles')

    @livewireScripts
    @toastScripts
    <script src="{{ asset('js/app.js') }}" defer></script>
    @stack('headScripts')
</head>

<body class="antialiased @yield('bodyClasses')">

<livewire:toasts/>
@yield('body')

</body>
</html>
