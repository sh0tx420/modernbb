<script setup lang="ts">
import { useAuthModalStore } from './AuthForm.vue';
// cannot use these variables directly in template wtf vue
const { status } = useAuth();
const AuthModalStore = useAuthModalStore();

const auth = {
    status: {
        value: status.value,
        effect: status.effect
    }
}
</script>

<template>
    <div v-if="auth.status.value === 'unauthenticated'">
        <UButton @click="AuthModalStore.isOpen = true" label="Login" size="md" color="purple" icon="i-heroicons-arrow-right-on-rectangle" :trailing="true" />
    </div>
    <div v-if="auth.status.value === 'authenticated'">
        <img width="16" height="16" alt="steamhappy" src="https://cdn3.emoji.gg/emojis/3194-steamhappy.png" />
    </div>

    <AuthForm />
</template>