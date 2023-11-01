module.exports = {
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: "@typescript-eslint/parser",
        ecmaVersion: 2020,
        sourceType: "module",
    },
    extends: [
        "plugin:nuxt/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    plugins: ["@typescript-eslint"],
    rules: {
        semi: ["error", "always"],
        indent: ["warn", 4]
    }
};
