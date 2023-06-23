<script>
    import "../app.css";
</script>
<nav class="bg-white border-gray-200 dark:bg-gray-900 hidden">
    <div class="max-w-screen-xl flex flex-wrap justify-center items-center mx-auto p-4">
        <ul class="font-medium font-serif text-4xl flex flex-col justify-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
                <a href="/" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Menu</a>
            </li>
        </ul>
    </div>
</nav>
<div class="text-center">
    <h1 class="text-8xl font-serif font-bold">Le Transsibérien</h1>
</div>
<slot></slot>
