<template>
  <div>
    <Teleport to="#footer">
      <h2 class="red">This should be red and after react</h2>
    </Teleport>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.red {
  color: red;
}
</style>
