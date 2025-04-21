<script setup lang="ts">
import Body from '@/components/Simulation/Body.vue';
import { ref } from 'vue';
import { BodyModel } from '@/models/simulation/BodyModel';

// Lista de cuerpos en el espacio
const bodies = ref<BodyModel[]>([
    new BodyModel(100, 100),
    new BodyModel(500, 500, "#ff0000"),
]);

const moveEverything = () => {
    // Lógica para mover los cuerpos
    bodies.value.forEach(body => {
        body.move();
    });
}

</script>

<template>
    <div class="fondo">
        <p>ESTO ES LA SIMULACIÓN</p>
        <button @click="moveEverything">MOVER</button>
        <Body v-for="(body, index) in bodies" :key="index" :positionX="body.positionX" :positionY="body.positionY" :color="body.color" />
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