<script lang="ts">
export const useAuthModalStore = defineStore("AuthModalStore", {
    state: () => ({ isOpen: false, currentTab: 0 })
});
</script>

<script setup lang="ts">
const { signIn, signUp } = useAuth();
const formVisible = ref(false);

const AuthModalStore = useAuthModalStore();

const tabs = [{ label: "Login" }, { label: "Register" }]

</script>

<template>
    <UModal v-model="AuthModalStore.isOpen" prevent-close>
        <UCard>
            <template #header>
                <div class="flex justify-between items-center">
                    <h1>{{ tabs[AuthModalStore.currentTab].label }}</h1>
                    <UButton @click="AuthModalStore.isOpen = false" icon="i-heroicons-x-mark" variant="ghost" color="gray" class="sticky" />
                </div>
            </template>

            <UTabs v-model="AuthModalStore.currentTab" :items="tabs" />
            
            Current tab value: 
            {{ AuthModalStore.currentTab }}
        </UCard>
    </UModal>
</template>