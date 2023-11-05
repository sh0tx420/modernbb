// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    pages: true,
    srcDir: "src/",
    css: ["~/assets/css/main.css"],
    modules: [
        "@nuxt/ui",
        ["@nuxtjs/google-fonts", {
            display: "swap",
            download: true,
            base64: true,
            overwriting: true,
            stylePath: "~/assets/css/googlefonts.css",
            families: {
                "Exo 2": [700],
                "Rubik": [300, 400]
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
    tailwindcss: {
        config: {
            theme: {
                fontFamily: {
                    exo2: "Exo 2",
                    rubik: "Rubik"
                }
            }
        }
    }
});
