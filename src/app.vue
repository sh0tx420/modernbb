<script setup lang="ts">
const bgColor = ref("#121212");

function ChangeGlobalBgColor(color: string) {
    document.body.style.backgroundColor = color;
}

/* <UInput class="max-w-sm m-2" v-model="bgColor" placeholder="backgroundColor" @input="ChangeGlobalBgColor(bgColor)" />*/

// NOTE FOR SELF!!!! READ!!! IMPORTANT!!!
// Make users able to modify a color palette, from which they can use the colors in navbar, background, primary color, etc.
// and the option to style individual components
</script>

<template>
    <div :style="{ backgroundColor: bgColor }" :ui="{ color: { primary: 'purple' } }">
        <Navbar />
        <LazyNuxtPage transition/>
    </div>
</template>