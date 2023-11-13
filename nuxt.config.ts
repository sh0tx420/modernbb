// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    pages: true,
    srcDir: "src/",
    css: ["~/assets/css/tailwind.css"],
    modules: [
        "@nuxt/ui",
        "@nuxtjs/color-mode",
        "@nuxtjs/i18n",
        ["@nuxtjs/google-fonts", {
            display: "swap",
            base64: true,
            families: {
                "Exo 2": [700],
                "Rubik": [300, 400],
                "DM Mono": true
            }
        }]
    ],
    app: {
        head: {
            title: "modernbb",
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1"
        }
    },
    i18n: {
        locales: [
            {
                name: "English",
                code: "en",
                iso: "en",
                file: "english.json"
            },
            {
                name: "Русский",
                code: "ru",
                iso: "ru",
                file: "russian.json"
            }
        ],
        strategy: "no_prefix",
        lazy: true,
        langDir: "lang",
        defaultLocale: "ru"
    },
    tailwindcss: {
        config: {
            darkMode: ["class", '[data-mode="dark"'],
            theme: {
                fontFamily: {
                    sans: ["Rubik", "sans-serif"],
                    serif: ["Exo 2", "serif"],
                    mono: ["DM Mono", "monospace"]
                }
            }
        }
    }
});
