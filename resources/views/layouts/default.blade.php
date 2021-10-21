@extends('layouts.master')

@section('body')
    <livewire:toasts />

    @include('partials.header')

    @yield('content')
@endsection
