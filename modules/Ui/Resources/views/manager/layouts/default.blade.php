@extends('ui::layouts.master')

@section('body')
    @include('ui::manager.partials.nav.mobile.container')

    @include('ui::manager.partials.nav.container')

    <div class="md:pl-64 flex flex-col flex-1">
        @include('ui::manager.partials.top-bar.container')

        <div class="w-full mx-auto p-4 sm:p-6 md:p-8">
            @yield('content')
        </div>
    </div>
@endsection
