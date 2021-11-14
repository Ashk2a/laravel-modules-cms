@extends('ui::layouts.default')

@php
    $routePanelOverview = locale()->localizeURL(route('panel.overview'));
    $last = request()->route()->getName() === 'panel.overview';
    $route = $last ? null : $routePanelOverview;
@endphp

@section('content')
    <x-ui::section.top>
        <x-ui::section.boxed>
            <x-ui::breadcrumb>
                <x-ui::breadcrumb.item :last="$last" :route="$route">@lang('panel::global.master_account')</x-ui::breadcrumb.item>
                @yield('breadcrumb')
            </x-ui::breadcrumb>

            <div class="flex space-x-5 text-white my-5">
                {{-- Left side - avatar --}}
                <div class="h-[130px] w-[130px]">
                    <img class="flex border-[1px] border-brown-400" src="https://media.way-of-elendil.fr/img/avatars/NXVMRGMTR6Y61482521013758.jpeg" alt="Avatar"/>
                </div>

                {{-- Rigth side - overview --}}
                <div class="flex flex-grow flex-col">
                    <div class="flex justify-between flex-grow flex-wrap items-start">
                        <div class="flex flex-col">
                            <div class="flex items-center">
                                <x-ui::text.title class="font-bold">{{ ucfirst(auth()->user()->nickname) }}</x-ui::text.title>
                            </div>

                            <div class="flex flex-wrap text-sm text-gray-200">
                                <div class="flex justify-between items-center">
                                    <x-heroicon-s-mail class="h-4 w-4 mr-2"/>
                                    <span class="flex">{{ auth()->user()->email }}</span>
                                </div>
                            </div>
                        </div>

                        {{-- Pushed right --}}
                        <div class="flex">
                            <x-ui::button class="btn-xs btn-lightBlue">@lang('auth::global.see_my_profile')</x-ui::button>
                        </div>
                    </div>
                    <div class="flex justify-between flex-grow flex-wrap items-end">
                        <div class="flex flex-row">
                            <div class="flex">
                                <x-heroicon-s-user-group class="h-4 w-4"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {{-- Navigation --}}
            <x-panel::nav/>

            <div class="py-10">
                @yield('section')
            </div>
        </x-ui::section.boxed>
    </x-ui::section.top>
@endsection
