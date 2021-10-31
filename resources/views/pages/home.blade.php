@extends('layouts.default')

@section('content')
    <x-section.top class="bg-opacity-20" style="background-image: url('{{ asset('images/background/bg-1.jpg') }}')">
        <x-section.boxed class="h-[12rem]">

        </x-section.boxed>

        <x-section.boxed>
            <div class="flex inline-flex justify-center items-baseline space-x-2">
                <h1 class="text-3xl">Latest news & updates</h1>
                <a href="#" class="text-gold-300 align-middle font-bold">View all</a>
            </div>


            <div class="grid lg:grid-cols-3 lg:space-y-0 lg:space-x-5 grid-cols-1 space-y-4 mt-6">
                @foreach(range(1, 3) as $k)
                    <article class="col-span-1 group relative bg-no-repeat bg-brown-300 bg-top bg-cover min-h-[13.5rem] border-[1px] border-gray-300 hover:border-gold-400" style="background-image: url('{{ asset('images/demo/news/example.jpg') }}')">
                        <div class="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent h-[40%]">

                        </div>

                        <div class="absolute bottom-0 w-full group-hover:bg-black group-hover:bg-opacity-20 py-3 px-2">
                            <span class="text-white text-sm font-light">October 28, 2021</span>
                            <div class="text-gold-400 text-lg leading-5 font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</div>
                        </div>
                    </article>
                @endforeach
            </div>
        </x-section.boxed>
    </x-section.top>
@endsection
