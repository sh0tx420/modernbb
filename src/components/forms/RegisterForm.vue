<script setup lang="ts">
import useAuthStore from "@/store/AuthStore";

const store = useAuthStore();

// validators
function ValidateForm(form: Record<string, any>) {
    const jsonform = JSON.parse(JSON.stringify(form))

    alert(jsonform)
}
</script>

<template>
    <UForm :state="store.authentication.register" class="flex flex-col gap-4">
        <UFormGroup label="Username" name="username">
            <UInput color="purple" v-model="store.authentication.register.username" />
        </UFormGroup>
        <UFormGroup label="Password" name="password">
            <div class="flex gap-2">
                <UInput :type="store.authentication.passwordVisible ? 'text' : 'password'" color="purple" v-model="store.authentication.register.password" class="grow" />
                <UButton
                    v-if="store.authentication.passwordVisible"
                    @click="store.authentication.passwordVisible = false"
                    icon="i-heroicons-eye"
                    color="gray"
                    variant="ghost"
                />
                <UButton
                    v-else
                    @click="store.authentication.passwordVisible = true"
                    icon="i-heroicons-eye-slash"
                    color="gray"
                    variant="ghost"
                />
            </div>
        </UFormGroup>
        <UFormGroup label="Confirm Password" name="confirmpwd">
            <UInput :type="store.authentication.passwordVisible ? 'text' : 'password'" color="purple" v-model="store.authentication.register.confirmpwd" />
        </UFormGroup>

        <UButton @click="ValidateForm(store.authentication.register)" type="submit" color="purple" class="max-w-min">
            Submit
        </UButton>
    </UForm>
</template>