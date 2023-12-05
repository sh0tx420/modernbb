<script setup lang="ts">
import type { FormSubmitEvent } from "#ui/types";
import useAuthStore from "@/store/AuthStore";
import { z } from "zod"; // Z

const store = useAuthStore();
const { t } = useI18n();

// validators
const vdata = {
    min: {
        username: 5,
        password: 8
    },
    max: {
        username: 32,
        password: 128
    }
}
const schema = z.object({
    username: z.string({ required_error: t("validators.required") })
        .min(vdata.min.username, t("validators.minimum").replace("%i", vdata.min.username.toString()))
        .max(vdata.max.username, t("validators.maximum").replace("%i", vdata.max.username.toString())),
        //.regex(/^[a-zA-Z0-9_]*$/, t("validators.regex_alphanumeric")),
    password: z.string({ invalid_type_error: t("validators.required") })
        .min(vdata.min.password, t("validators.minimum").replace("%i", vdata.min.password.toString()))
        .max(vdata.max.password, t("validators.maximum").replace("%i", vdata.max.password.toString())),
    confirmpwd: z.string({ invalid_type_error: t("validators.required") })
        .min(vdata.min.password, t("validators.minimum").replace("%i", vdata.min.password.toString()))
        .max(vdata.max.password, t("validators.maximum").replace("%i", vdata.max.password.toString())),
}).refine(data => data.password === data.confirmpwd, {
    message: t("validators.passwords_nomatch")
});

type Schema = z.output<typeof schema>;

async function OnFormSubmit(event: FormSubmitEvent<Schema>) {
    const d = import.meta.env.DEV

    if (d) console.log("Called OnFormSubmit");

    /*
    // this will never happen
    for (const [_, v] of Object.entries(event.data)) {
        if (!v) return console.error("No data when submitting form")
    }
    */

    const { data } = await useFetch("/api/auth/register", {
        headers: {
            username: event.data.username,
            password: event.data.password,
            confirmpwd: event.data.confirmpwd
        },
        method: "post"
    });

    if (d) {
        for (const x of ["DATA.VALUE:", data.value, event.data.username, event.data.password, `CONFIRM ${event.data.confirmpwd}`]) {
            console.log(x);
        }
    }
}
</script>

<template>
    <UForm :schema="schema" :state="store.authentication.register" class="flex flex-col gap-4" @submit="OnFormSubmit">
        <UFormGroup required label="Username" name="username">
            <UInput color="purple" v-model="store.authentication.register.username" />
        </UFormGroup>
        <UFormGroup required label="Password" name="password">
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
        <UFormGroup required label="Confirm Password" name="confirmpwd">
            <UInput :type="store.authentication.passwordVisible ? 'text' : 'password'" color="purple" v-model="store.authentication.register.confirmpwd" />
        </UFormGroup>

        <UButton type="submit" color="purple" class="max-w-min">
            Submit
        </UButton>
    </UForm>
</template>