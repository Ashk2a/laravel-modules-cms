<x-ui::section.boxed>
    <div class="flex inline-flex justify-center items-baseline space-x-2">
        <x-ui::text.title class="text-3xl text-white">Latest news & updates</x-ui::text.title>
        <a href="#" class="text-gold-300 align-middle font-bold text-shadow">View all</a>
    </div>

    <div class="grid lg:grid-cols-3 lg:space-y-0 lg:space-x-5 grid-cols-1 space-y-4 mt-6">
        <x-news::preview title="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam" publishedAt="October 28, 2021"/>
        <x-news::preview title="Lorem ipsum dolor sit amet" publishedAt="October 28, 2021"/>
        <x-news::preview title="Consectetur adipiscing elit ut aliquam" publishedAt="October 28, 2021"/>
    </div>
</x-ui::section.boxed>
