<script setup lang="ts">
import useAuthStore from "@/store/AuthStore"

const { signIn, signUp } = useAuth();
const store = useAuthStore();
const tabs = [{ label: "Login" }, { label: "Register" }]

</script>

<template>
    <UModal v-model="store.isOpen" prevent-close>
        <UCard class="transition">
            <template #header>
                <div class="flex justify-between items-center">
                    <h1>{{ tabs[store.currentTab].label }}</h1>
                    <UButton @click="store.isOpen = false" icon="i-heroicons-x-mark" variant="ghost" color="gray" class="sticky" />
                </div>
            </template>

            <UTabs v-model="store.currentTab" :items="tabs" />
            <div v-if="store.currentTab === 0">
                Здарова хохол
            </div>
            <div v-if="store.currentTab === 1">
                <RegisterForm />
            </div>
        </UCard>
    </UModal>
</template>