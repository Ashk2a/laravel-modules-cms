@extends('ui::layouts.default')

@section('content')
    <x-ui::section.title style="background-image: url('{{ asset('images/background/news.jpg') }}')">
        <x-slot name="title">
            @lang('global.news_and_update')
        </x-slot>
    </x-ui::section.title>

    <x-ui::section.boxed class="py-10">
        <div class="grid grid-rows-1">
            <x-news::item/>
            <x-news::item/>
            <x-news::item/>
        </div>
    </x-ui::section.boxed>
@endsection
