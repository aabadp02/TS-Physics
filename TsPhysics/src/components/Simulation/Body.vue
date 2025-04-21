<script setup lang="ts">

    import { ref, reactive } from 'vue';
    
    const props = defineProps({

        positionX: {
            type: Number,
            default: 0
        },

        positionY: {
            type: Number,
            default: 0
        },

        mass: {
            type: Number,
            default: 0
        }
    });

    defineExpose({
        move
    });

    /**
     * Variables para determinar la posición del cuerpo
     */
    const top = ref<number>(props.positionY);
    const left = ref<number>(props.positionX);

    /**
     * Función para llevar a cabo un delay con javascript (typescript)
     * @param ms 
     */
    function delay(ms: number) {
        return new Promise( resolve => setTimeout(resolve, ms) );
    }

    /**
     * Función provisional para mover el cuerpo horizontalmente en el espacio 50 posiciones
     */
    async function move() { 

        for(var i = 0; i < 20; i++) {
            top.value += i * 2;

            // Hacemos un delay para que el movimiento no sea instantáneo, sino progresivo
            await delay(10);
        }
        await delay(2000);

        resetPosition();
    }

    /**
     * Función para resetear la posición del cuerpo a su posición inicial
     */
    function resetPosition() {
        top.value = props.positionY;
        left.value = props.positionX;
    }

</script>

<template>
    <div class="shape" :style=" {top: top + 'px', left: left + 'px'}"/>
</template>

<style scoped>

    .shape {
        position: absolute;
        height: 25px;
        width: 25px;
        border-radius: 50%;
        background-color: brown;
    }

</style>