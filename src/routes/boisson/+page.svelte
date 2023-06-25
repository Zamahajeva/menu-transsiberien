<script>
    export let data;
</script>

<div class="container mx-auto mt-28 pl-2 pr-2 md:pl-0 md:pr-0">
    <!----------------- COCKTAILS ----------------------->
    <h2 class="text-2xl lg:text-4xl font-serif">Cocktail</h2>
    <div class="mt-4">
        {#each data.cocktails as {nom, description, prix}}
            <div class="flex flex-col text-sm lg:text-lg mt-2">
                <div class="flex flex-row justify-between ">
                    <div class="flex flex-row w-full">
                        <div class="font-bold whitespace-nowrap">{nom}</div>
                        <div class="border-gray-300 border-dotted border-b w-full m-1 ml-4 mr-4"></div>
                    </div>
                    <div class="w-16 font-sans font-bold">{prix} €</div>
                </div>
                <div>
                    <p class="font-serif text-gray-600">{description}</p>
                </div>
            </div>
        {/each}

    </div>
</div>
