<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{ config('app.name') }}</title>

    @livewireStyles

    <link href="{{ asset('css/tailwind.css') }}" rel="stylesheet">
    <link href="{{ asset('css/vendor.css') }}" rel="stylesheet">

    @section('css') @endsection

    @livewireScripts
    <script src="{{ asset('js/vendor.js') }}"></script>

    @section('js') @endsection
</head>
<body>
@yield('body')
</body>
</html>
