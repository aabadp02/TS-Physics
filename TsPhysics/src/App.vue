<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="prueba">
    <RouterView />
  </div>
</template>

<style scoped>

.prueba {
  display: flex;
  height: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;
}

</style>