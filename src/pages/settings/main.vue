<script setup lang="ts">
    const settings = ref({
        metadata: {
            title: "modernbb",
            titleIncludePageName: true
        }
    });

    const pageHead = useHead({
        title: settings.value.metadata.title
    });

</script>

<template>
    <div class="flex mt-12">
        <SettingsPageSelector />
        
        <div class="flex gap-4 max-w-full mx-52 p-1 bg-neutral-700 rounded-md">
            <div class="bg-neutral-800 p-2 rounded-md">
                <h3>Site metadata</h3>
                <UDivider />
                <UFormGroup label="Title" description="The title of the site that will appear on the tab.">
                    <UInput v-model="settings.metadata.title" placeholder="modernbb" color="purple" />
                
                </UFormGroup>
            </div>
        </div>
    </div>
</template>