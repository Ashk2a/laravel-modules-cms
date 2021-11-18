@props(['title' => 'TITLE'])

<h2 class="text-2xl text-white mb-4">{{ $title }}</h2>
<ul class="flex flex-col flex-grow gap-4">
    {{ $slot }}
</ul>
