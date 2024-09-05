<template>
  <div>
    <Teleport to="#header">
      <div>This is a will it federate?</div>
      <button @click="() => myCounter++">{{ myCounter }}</button>
      {{ data }}
      {{ myRuntime }}
    </Teleport>
  </div>
</template>

<script setup lang="ts">
const myState = useState("test", () => "");
const myCounter = useState("counter", () => 0);
onMounted(() => {
  console.log("state", myState.value);
});
const myRuntime = useRuntimeConfig().public.someconfig;
const { data } = useFetch("/api/test");
</script>

<style scoped></style>
