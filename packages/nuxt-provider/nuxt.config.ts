// https://nuxt.com/docs/api/configuration/nuxt-config
import federation from "@originjs/vite-plugin-federation";
import runtimeConfigPlugin from "./runtimeConfigPlugin";
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  routeRules: {
    "/**": { cors: true },
  },
  runtimeConfig: {
    public: {
      someconfig: "in nuxt config",
    },
  },
  vite: {
    server: {
      cors: true,
    },
    // not necessary, just for debugging purposes
    build: {
      minify: false,
      terserOptions: {
        compress: false,
        mangle: false,
      },
    },
    plugins: [
      runtimeConfigPlugin(),
      federation({
        name: "layoutnuxt",
        filename: "remoteEntry.js",
        exposes: {
          "./runtimeConfig": "./runtimeConfig.ts",
          "./Test": "./components/Test.vue",
          "./app": "./federatedApp.ts",
        },
      }),
    ],
  },
});
