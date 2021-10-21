<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{ config('app.name') }}</title>

    @livewireStyles

    <link href="{{ asset('css/tailwind.css') }}" rel="stylesheet">
    <link href="{{ asset('css/vendor.css') }}" rel="stylesheet">
    @section('head_style') @endsection

    @livewireScripts
    @toastScripts
    <script src="{{ asset('js/vendor.js') }}" defer></script>

    @section('head_js') @endsection
</head>
<body>

@yield('body')

@section('body_js') @endsection

</body>
</html>
