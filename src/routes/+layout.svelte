<script>
    import "../app.css";
</script>
<div class="w-screen bg-amber-950">&nbsp;</div>
<div class="text-center">
    <h1 class="text-4xl lg:text-8xl font-serif font-bold">Le Transsibérien</h1>
</div>
<nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="text-center">
        <ul class="font-serif font-bold flex flex-col md:flex-row justify-center">
            <li><a class="pl-3 pr-3 text-2xl" href="/">Plats</a></li>
            <li><a class="pl-3 pr-3 text-2xl" href="/boisson">Boissons</a></li>
        </ul>
    </div>
</nav>

<slot></slot>
