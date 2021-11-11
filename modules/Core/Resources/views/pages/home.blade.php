@extends('ui::layouts.default')

@section('content')
    <x-ui::section.top class="bg-opacity-20 pb-10" style="background-image: url('{{ asset('images/background/home.jpg') }}')">
        <x-ui::section.boxed class="">

        </x-ui::section.boxed>

        <x-ui::section.boxed>
            <div class="flex inline-flex justify-center items-baseline space-x-2">
                <h1 class="text-3xl text-shadow">Latest news & updates</h1>
                <a href="#" class="text-gold-300 align-middle font-bold text-shadow">View all</a>
            </div>

            <div class="grid lg:grid-cols-3 lg:space-y-0 lg:space-x-5 grid-cols-1 space-y-4 mt-6">
                <x-news::preview title="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam" publishedAt="October 28, 2021"/>
                <x-news::preview title="Lorem ipsum dolor sit amet" publishedAt="October 28, 2021"/>
                <x-news::preview title="Consectetur adipiscing elit ut aliquam" publishedAt="October 28, 2021"/>
            </div>
        </x-ui::section.boxed>
    </x-ui::section.top>
@endsection
