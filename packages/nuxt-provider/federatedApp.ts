import type { ObjectPlugin, Plugin } from "nuxt/app";
import { createApp } from "vue";
import { getContext } from "unctx";
// @ts-ignore
import plugins from "#build/plugins";
import { $fetch } from "ofetch";

// This is used to overwrite the fetch function, not sure if it's necessary for Storybook
// It doesn't work with the current setup
// import '#build/fetch.mjs'
import "#build/css";

export async function setup() {
  // @ts-ignore
  const baseURL = window.__NUXT__.config.app.cdnURL;
  // We key the Nuxt apps to the id of the story
  // This is not totally correct, since the storybook vue renderer actually uses the canvas element
  // Also this doesn't allow to "forceRemount"
  const nuxtappmodule = await import("nuxt/app");
  const RootComponentImp = await import("./FederatedAppRoot.vue");
  const RootComponent = RootComponentImp.default;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const pluginsTyped: Array<Plugin & ObjectPlugin<any>> = plugins;

  const applyPlugins = nuxtappmodule.applyPlugins;

  const createNuxtApp = nuxtappmodule.createNuxtApp;
  const nuxtAppId = "nuxt-federated";
  const nuxtContext = getContext(nuxtAppId);
  if (nuxtContext.tryUse()) {
    // Nothing to do, the Nuxt app is already created
    return;
  }

  // Set $fetch
  // based on https://github.com/nuxt/nuxt/blob/356173134280b66c5902e5129d2f5ee73b799352/packages/nuxt/src/core/templates.ts#L390-L403
  if (!globalThis.$fetch) {
    globalThis.$fetch = $fetch.create({
      baseURL,
    });
  }
  const vueApp = createApp(RootComponent);

  const nuxt = createNuxtApp({
    id: nuxtAppId,
    vueApp,
  });

  // Provide the Nuxt app as context
  nuxtContext.set(nuxt, true);
  // ...also for calls of useNuxtApp with the default key
  getContext("nuxt-app").set(nuxt, true);

  await applyPlugins(nuxt, pluginsTyped);
  await nuxt.hooks.callHook("app:created", vueApp);
  await nuxt.hooks.callHook("app:beforeMount", vueApp);

  vueApp.mount("#__nuxt");
  // TODO: The following are usually called after the app is mounted
  // but currently storybook doesn't provide a hook to do that
  await nuxt.hooks.callHook("app:mounted", vueApp);
  await nextTick();
}
