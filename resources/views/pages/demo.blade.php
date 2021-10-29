@extends('layouts.default')

@section('content')
    <x-container.separator/>

    <x-container.fluid class="bg-gray-900 py-10">
        <x-container.boxed>
            <h1 class="text-2xl">Form components</h1>

            <x-form>
                <x-form.input type="email" label="Email"/>
                <x-form.input type="text" label="Text"/>
                <x-form.input type="number" label="Number"/>
                <x-form.radio name="radio" label="Checkbox"/>
                <x-form.select name="select" label="Select" :options="[1 => 'Test', 2 => 'Test2', 3 => 'Toto']"/>
                <x-form.textarea name="textarea" label="Textarea">Test</x-form.textarea>
                <x-form.submit>Submit</x-form.submit>
            </x-form>
        </x-container.boxed>
    </x-container.fluid>

    <x-container.separator/>
@endsection
