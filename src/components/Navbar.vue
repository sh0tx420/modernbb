<script setup>
    const navUrls = [
        {
            link: "/",
            label: "Home"
        },
        {
            link: "/settings",
            label: "Settings"
        }
    ]
</script>

<template>
    <nav class="bg-neutral-700 mx-7 md:w-1/2 md:mx-auto mt-3 p-3 rounded-md shadow-md">
        <div class="flex flex-row justify-items-start gap-2">
            <div class="flex text-xl font-exo2 font-bold items-center">
                <h1 class="text-purple-600">modern</h1>
                <h1>bb</h1>
            </div>

            <div class="flex">
                <UDivider orientation="vertical" />
            </div>

            <div class="flex flex-row gap-2 items-center font-rubik">
                <ULink v-for="url in navUrls" :to="url.link" active-class="text-purple-500" inactive-class="transition-colors hover:text-purple-500">
                    {{ url.label }}
                </ULink>
            </div>

            <div class="flex ml-auto">
                <UButton label="Login" size="md" color="purple" icon="i-heroicons-arrow-right-on-rectangle" :trailing="true" />
            </div>
        </div>
    </nav>
</template>
