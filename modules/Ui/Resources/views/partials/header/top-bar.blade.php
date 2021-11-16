<div class="bg-darkGray-900 border-b-[1px] border-gray-800">
    <x-ui::container.default class="flex h-[35px] items-center justify-between relative">
        <div class="flex flex-1 items-center justify-start" x-data="{locale: false}">
            @include('ui::partials.header.locale')
        </div>

        <div class="flex flex-1 items-center justify-end" x-data="{account: false}">
            @include('ui::partials.header.account')
        </div>
    </x-ui::container.default>
</div>
