@extends('panel::layouts.default')

@section('breadcrumb')
    <x-ui::breadcrumb.item :last="true" :route="route('panel.preferences')">@lang('ui::global.preferences')</x-ui::breadcrumb.item>
@endsection

@section('section')
    <div class="grid gap-y-10" x-data="{open: false}">
        <div class="col-span-1">
            <x-panel::preference.container :title="trans('ui::global.master_account')">
                <x-panel::preference.item :section="trans('ui::global.nickname')" :description="trans('panel::text.desc_nickname')">
                    <div class="flex items-center">
                        <x-heroicon-o-exclamation-circle class="h-5 w-5 text-red-600 mr-2"/> @lang('panel::text.alert_nickname')
                    </div>
                </x-panel::preference.item>

                <x-panel::preference.item :section="trans('ui::global.avatar')" :description="trans('panel::text.desc_avatar')">
                    <div class="flex items-center">
                        <x-heroicon-o-exclamation-circle class="h-5 w-5 text-red-600 mr-2"/> @lang('panel::text.alert_nickname')
                    </div>
                </x-panel::preference.item>
            </x-panel::preference.container>
        </div>

        <div class="col-span-1">
            <x-panel::preference.container :title="trans('ui::global.security')">
                <x-panel::preference.item :section="trans('ui::global.email')" :description="trans('panel::text.desc_email')">

                </x-panel::preference.item>

                <x-panel::preference.item :section="trans('ui::global.password')" :description="trans('panel::text.desc_password')">
                    <div class="flex items-center">
                        <x-heroicon-o-exclamation-circle class="h-5 w-5 text-red-600 mr-2"/> @lang('panel::text.alert_nickname')
                    </div>
                </x-panel::preference.item>
            </x-panel::preference.container>
        </div>
    </div>
@endsection
