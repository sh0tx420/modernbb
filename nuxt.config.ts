// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    pages: true,
    srcDir: "src/",
    css: ["~/assets/css/main.css"],
    modules: [
        "@nuxt/ui",
        "@nuxtjs/eslint-module"
    ],
    app: {
        head: {
            title: "modernbb",
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1"
        }
    },
});
