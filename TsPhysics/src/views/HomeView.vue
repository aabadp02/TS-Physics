<script setup lang="ts">
</script>

<template>
  <div>

    <div class="link-container">
      <RouterLink class="link" to="/about"><p>Nueva partida</p></RouterLink>
    </div>

    <div class="link-container">
      <RouterLink class="link" to="/about"><p>Continuar</p></RouterLink>
    </div>

    <div class="link-container">
      <RouterLink class="link" to="/simulation"><p>Simulación</p></RouterLink>
    </div>

    <div class="link-container">
      <RouterLink class="link" to="/about"><p>Opciones</p></RouterLink>
    </div>

    <div class="link-container">      
      <RouterLink class="link" to="/about"><p>Créditos del juego</p></RouterLink>
    </div>
    
  </div>
</template>

<style scoped>

  .link-container:hover {
    background-color: aliceblue;
  }

  .link-container:hover .link {
    color: #171717;
  }

  .link {
    text-decoration: none;
    color: white;
  }

</style>
