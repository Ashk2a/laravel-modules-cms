<article class="col-span-1 group relative bg-no-repeat bg-brown-300 bg-top bg-cover min-h-[13.5rem] border-[1px] border-gray-300 hover:border-gold-400" style="background-image: url('{{ asset('images/demo/news/example.jpg') }}')">
    <div class="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent h-[40%]"></div>

    <div class="absolute bottom-0 w-full group-hover:bg-black group-hover:bg-opacity-20 py-3 px-2">
        <span class="text-white text-sm font-light">{{ $publishedAt }}</span>
        <div class="text-gold-400 text-lg leading-5 font-medium">{{ $title }}</div>
    </div>
</article>
