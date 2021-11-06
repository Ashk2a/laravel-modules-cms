@extends('layouts.master')

@section('body')
    <livewire:toasts />

    @include('partials.side-right')
    @include('partials.header')

    @yield('content')

    @include('partials.footer')
@endsection
