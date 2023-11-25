<script setup lang="ts">
import useAuthStore from '@/store/AuthStore';
// cannot use these variables directly in template wtf vue
const { status } = useAuth();
const store = useAuthStore();

const auth = {
    status: {
        value: status.value,
        effect: status.effect
    }
}
</script>

<template>
    <div v-if="auth.status.value === 'unauthenticated'">
        <UButton @click="store.isOpen = true" label="Login" size="md" color="purple" icon="i-heroicons-arrow-right-on-rectangle" :trailing="true" />
    </div>
    <div v-if="auth.status.value === 'authenticated'">
        <img width="16" height="16" alt="steamhappy" src="https://cdn3.emoji.gg/emojis/3194-steamhappy.png" />
    </div>

    <LoginModal />
</template>