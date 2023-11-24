<script setup lang="ts">
// https://ui.nuxt.com/elements/button#icon
// ^ documentation about button icons
const SettingsItems = [
    {
        categoryName: "Main",
        buttons: [
            {
                label: "Site settings",
                icon: "i-heroicons-adjustments-horizontal",
                href: "/settings/main"
            },
            {
                label: "Theme",
                icon: "i-heroicons-swatch"
            }
        ]
    },
    {
        categoryName: "cat 2",
        buttons: [
            {
                label: "meow 3",
                icon: "xd"
            },
            {
                label: "meow 4",
                icon: "no"
            }
        ]
    }
]
</script>

<template>
    <aside class="fixed flex mt-2 max-w-fit bg-neutral-700 p-2 rounded-r-lg">
        <ul class="flex flex-col list-none">
            <li v-for="category in SettingsItems" class="flex flex-col">
                <h3 class="text-neutral-400 font-mono">
                    {{ category.categoryName }}
                </h3>
                <UButton v-for="btn in category.buttons" color="purple" variant="ghost" :icon="btn.icon" :to="btn.href">
                    {{ btn.label }}
                </UButton>
            </li>
        </ul>
    </aside>
</template>