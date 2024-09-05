<template>
  <Suspense @resolve="onResolve">
    <Test />
  </Suspense>
</template>

<script setup>
const PageRouteSymbol = Symbol("route");
const nuxtApp = useNuxtApp();

const onResolve = nuxtApp.deferHydration();

// Inject default route (outside of pages) as active route
provide(PageRouteSymbol, useRoute());

// vue:setup hook
const results = nuxtApp.hooks.callHookWith(
  (hooks) => hooks.map((hook) => hook()),
  "vue:setup",
);

// error handling
const error = useError();
</script>
