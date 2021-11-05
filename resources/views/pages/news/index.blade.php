@extends('layouts.default')

@section('content')
    <x-section.title style="background-image: url('{{ asset('images/background/news.jpg') }}')">
        <x-slot name="title">
            @lang('global.news_and_update')
        </x-slot>
    </x-section.title>
    <x-section.boxed class="py-10">
        <div class="grid grid-rows-1">
            <x-news.item></x-news.item>
            <x-news.item></x-news.item>
            <x-news.item></x-news.item>
        </div>

    </x-section.boxed>
@endsection
