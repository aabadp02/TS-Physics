<script setup lang="ts">
import Body from '@/components/Simulation/Body.vue';
import { ref } from 'vue';

const childRef = ref<InstanceType<typeof Body> | null>(null);

/**
 * Función que empieza el movimiento invocando la función "move" del componente
 * Body
 */
function startMovement() {
    childRef.value?.move();
}

</script>

<template>
    <div class="fondo">
        <p>ESTO ES LA SIMULACIÓN</p>
        <button @click="startMovement">MOVER</button>
        <Body ref="childRef" :positionX="500" :positionY="400"></Body>
    </div>
</template>

<style scoped>

    .fondo{
        background-image: 
        linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
        background-size: 50px 50px; /* Tamaño de cada cuadrado */
        height: 100%;
        width: 100%;
    }
</style>