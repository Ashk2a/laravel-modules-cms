@extends('panel::layouts.default')

@section('section')
    <div class="">
        <x-ui::text.title class="text-white text-xl mb-4">Game accounts</x-ui::text.title>
        <table class="min-w-full bg-brown-500 text-white border-[1px] border-brown-400">
            <thead>
            <tr class="border-b-[1px] border-brown-400">
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                    Account name
                </th>
                <th scope="col" class="hidden sm:table-cell px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                    Characters
                </th>
                <th scope="col" class="hidden sm:table-cell px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                    Status
                </th>
                <th scope="col" class="hidden sm:table-cell px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                    Last connexion
                </th>
                <th scope="col" class="relative px-6 py-3">
                    <span class="sr-only">Settings</span>
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
                        Active
                    </td>
                    <td class="hidden sm:table-cell px-6 py-4 whitespace-nowrap text-sm">
                        {{ $account->last_login ?? 'Never' }}
                    </td>
                    <td class="flex justify-end px-6 py-4 whitespace-nowrap">
                        <x-ui::button class="btn-xs btn-lightBlue">Settings</x-ui::button>
                    </td>
                @endforeach
            </tr>
            </tbody>
        </table>
    </div>
@endsection
