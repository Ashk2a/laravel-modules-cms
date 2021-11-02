@extends('layouts.default')

@section('content')
    <x-section.top class="bg-opacity-20 pb-10" style="background-image: url('{{ asset('images/background/home.jpg') }}')">
        <x-section.boxed class="h-[12rem]">

        </x-section.boxed>

        <x-section.boxed>
            <div class="flex inline-flex justify-center items-baseline space-x-2">
                <h1 class="text-3xl">Latest news & updates</h1>
                <a href="#" class="text-gold-300 align-middle font-bold">View all</a>
            </div>

            <div class="grid lg:grid-cols-3 lg:space-y-0 lg:space-x-5 grid-cols-1 space-y-4 mt-6">
                <x-post.preview title="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam" publishedAt="October 28, 2021"/>
                <x-post.preview title="Lorem ipsum dolor sit amet" publishedAt="October 28, 2021"/>
                <x-post.preview title="Consectetur adipiscing elit ut aliquam" publishedAt="October 28, 2021"/>
            </div>
        </x-section.boxed>
    </x-section.top>
@endsection
