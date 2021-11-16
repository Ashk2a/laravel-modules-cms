@extends('panel::layouts.default')

@section('section')
    <x-ui::text.title class="text-white text-xl mb-4">@lang('ui::global.game_accounts')</x-ui::text.title>
    <table class="min-w-full bg-brown-500 text-white border-[1px] border-brown-400">
        <thead>
        <tr class="border-b-[1px] border-brown-400">
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                @lang('ui::global.username')
            </th>
            <th scope="col" class="hidden sm:table-cell px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                @lang('ui::global.characters')
            </th>
            <th scope="col" class="hidden sm:table-cell px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                @lang('ui::global.status')
            </th>
            <th scope="col" class="hidden sm:table-cell px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                @lang('ui::global.last_connexion')
            </th>
            <th scope="col" class="relative px-6 py-3">
                <span class="sr-only">@lang('ui::global.settings')</span>
            </th>
        </tr>
        </thead>
        <tbody>
        <tr>
            @foreach(auth()->user()->accounts as $account)
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gold-400">
                    {{ $account->username }}
                </td>
                <td class="hidden sm:table-cell px-6 py-4 whitespace-nowrap text-sm">
                    5
                </td>
                <td class="hidden sm:table-cell px-6 py-4 whitespace-nowrap text-sm text-green-900 font-bold">
                    {{ auth()->user()->locked ? trans('ui::global.locked') : trans('ui::global.active') }}
                </td>
                <td class="hidden sm:table-cell px-6 py-4 whitespace-nowrap text-sm">
                    {{ $account->last_login ?? 'Never' }}
                </td>
                <td class="flex justify-end px-6 py-4 whitespace-nowrap">
                    <x-ui::button class="btn-xs btn-lightBlue">@lang('ui::global.settings')</x-ui::button>
                </td>
            @endforeach
        </tr>
        </tbody>
    </table>
@endsection
