@extends('ui::layouts.master')

@section('bodyClasses', 'body-web-bg')

@section('body')
    @include('ui::partials.header')

    @yield('content')

    @include('ui::partials.footer')
@endsection
