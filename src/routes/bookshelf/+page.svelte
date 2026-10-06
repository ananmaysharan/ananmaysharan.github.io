<script lang="ts">
    import { siteUrl } from '#lib/site.ts';
    import invisibleCities from '#lib/assets/reading/invisible-cities.jpg';
    import slouchingTowardsBethlehem from '#lib/assets/reading/slouching-towards-bethlehem.jpg';
    import theNewMediaReader from '#lib/assets/reading/the-new-media-reader.jpg';
    import mindstorms from '#lib/assets/reading/mindstorms.jpg';

    const books = [
        { title: 'Invisible Cities', author: 'Italo Calvino', cover: invisibleCities },
        { title: 'Slouching Towards Bethlehem', author: 'Joan Didion', cover: slouchingTowardsBethlehem },
    ];

    const researchBooks = [
        { title: 'The New Media Reader', author: 'Noah Wardrip-Fruin & Nick Montfort (eds.)', cover: theNewMediaReader },
        { title: 'Mindstorms', author: 'Seymour Papert', cover: mindstorms },
    ];
</script>

<svelte:head>
    <meta name="description" content="What Ananmay Sharan is currently reading." />
    <link rel="canonical" href={siteUrl('/bookshelf')} />
    <meta property="og:title" content="Bookshelf · Ananmay Sharan" />
    <meta property="og:description" content="What Ananmay Sharan is currently reading." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={siteUrl('/bookshelf')} />
</svelte:head>

<div class="w-full px-6 pt-4 sm:pt-6 pb-12">
    <section class="w-full max-w-120 mx-auto font-serif text-base leading-6" aria-labelledby="bookshelf-title">
        <h1 id="bookshelf-title" class="sr-only">Bookshelf</h1>
        <h2 id="currently-reading" class="text-sm text-text-muted mb-3">Currently Reading</h2>
        <ul class="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-8 list-none m-0 px-0 pb-0 pt-1.5" aria-labelledby="currently-reading">
            {#each books as book (book.title)}
                <li class="min-w-0 text-primary">
                    <img class="block w-full aspect-[2/3] object-contain object-bottom mb-3" src={book.cover} alt={`Cover of ${book.title} by ${book.author}`} />
                    <h3 class="italic text-base leading-6">{book.title}</h3>
                    <p class="text-primary text-base leading-6">{book.author}</p>
                </li>
            {/each}
        </ul>
        <h2 id="project-research" class="text-sm text-text-muted mt-12 mb-3">Independent Design Engineering Project Research</h2>
        <ul class="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-8 list-none m-0 px-0 pb-0 pt-1.5" aria-labelledby="project-research">
            {#each researchBooks as book (book.title)}
                <li class="min-w-0 text-primary">
                    <img class="block w-full aspect-2/3 object-contain object-bottom mb-3" src={book.cover} alt={`Cover of ${book.title} by ${book.author}`} />
                    <h3 class="italic text-base leading-6">{book.title}</h3>
                    <p class="text-primary text-base leading-6">{book.author}</p>
                </li>
            {/each}
        </ul>
    </section>
</div>
