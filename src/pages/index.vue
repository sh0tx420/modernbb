<script setup lang="ts">
import useAuthStore from "@/store/AuthStore"

const colorMode = useColorMode();
const store = useAuthStore();

</script>

<template>
    <div>
        <h1 class="text-3xl font-bold underline">
            {{ $t("navbar.home") }}
        </h1>
        <select
            v-model="colorMode.preference"
            class="border w-24 h-8 dark:bg-gray-900 dark:text-white dark:border-gray-700"
        >
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
        </select>
        <UDivider class="my-2" />
        {{ store.authentication.register.username }}
    </div>
</template>
