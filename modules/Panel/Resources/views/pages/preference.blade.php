@extends('panel::layouts.default')

@section('section')
    <div class="grid grid-cols-1 gap-4">
        <div class="col-span-1">
            <h2 class="text-2xl text-white mb-4">Profil</h2>
            <ul class="flex flex-col flex-grow text-white gap-4 grid grid-cols-2">
                @foreach (range(1, 2) as $k)
                    <li class="flex bg-brown-500 flex-grow border-[1px] border-brown-400">
                        <div class="flex items-center flex-1 px-4 py-2">
                            <h2 class="flex text-gold-400 flex-grow flex-basis-0">Hello</h2>
                            <span class="flex text-md flex-basis-0 flex-grow-2">Lorem {{ $k % 2 === 0 ? 'Ta mere la tchOUIN' : ''}}</span>
                            <x-heroicon-o-arrow-down class="h-3 w-3{{-- rotate-180--}}"/>
                        </div>
                    </li>
                @endforeach
            </ul>
        </div>
        <div class="col-span-1">
            <h2 class="text-2xl text-white mb-4">Profil</h2>
            <ul class="flex flex-col flex-grow text-white space-y-3">
                @foreach (range(1, 4) as $k)
                    <li class="flex bg-brown-500 flex-grow border-[1px] border-brown-400">
                        <div class="flex items-center flex-1 px-4 py-2">
                            <h2 class="flex text-gold-400 flex-grow flex-basis-0">Hello</h2>
                            <span class="flex text-md flex-basis-0 flex-grow-2">Lorem {{ $k % 2 === 0 ? 'Ta mere la tchOUIN' : ''}}</span>
                            <x-heroicon-o-arrow-down class="h-3 w-3{{-- rotate-180--}}"/>
                        </div>
                    </li>
                @endforeach
            </ul>
        </div>
        <div class="col-span-1">
            <h2 class="text-2xl text-white mb-4">Profil</h2>
            <ul class="flex flex-col flex-grow text-white space-y-3">
                @foreach (range(1, 6) as $k)
                    <li class="flex bg-brown-500 flex-grow border-[1px] border-brown-400">
                        <div class="flex items-center flex-1 px-4 py-2">
                            <h2 class="flex text-gold-400 flex-grow flex-basis-0">Hello</h2>
                            <span class="flex text-md flex-basis-0 flex-grow-2">Lorem {{ $k % 2 === 0 ? 'Ta mere la tchOUIN' : ''}}</span>
                            <x-heroicon-o-arrow-down class="h-3 w-3{{-- rotate-180--}}"/>
                        </div>
                    </li>
                @endforeach
            </ul>
        </div>
        <div class="col-span-1">
            <h2 class="text-2xl text-white mb-4">Profil</h2>
            <ul class="flex flex-col flex-grow text-white space-y-3">
                @foreach (range(1, 6) as $k)
                    <li class="flex bg-brown-500 flex-grow border-[1px] border-brown-400">
                        <div class="flex items-center flex-1 px-4 py-2">
                            <h2 class="flex text-gold-400 flex-grow flex-basis-0">Hello</h2>
                            <span class="flex text-md flex-basis-0 flex-grow-2">Lorem {{ $k % 2 === 0 ? 'Ta mere la tchOUIN' : ''}}</span>
                            <x-heroicon-o-arrow-down class="h-3 w-3{{-- rotate-180--}}"/>
                        </div>
                    </li>
                @endforeach
            </ul>
        </div>
    </div>


@endsection
