<script setup lang="ts">
import Body from '@/components/Simulation/Body.vue';
import { ref } from 'vue';
import { BodyModel } from '@/models/simulation/BodyModel';
import { SimulationConstants } from '@/constants/simulation/simulationConstants';

// Ajusta este valor según la precisión que necesites
const deltaTime = 1; 

/**
 * Función para llevar a cabo un delay con javascript (typescript)
 * @param ms 
 */
    const delay = (ms: number) => {
    return new Promise( resolve => setTimeout(resolve, ms) );
}


// Lista de cuerpos en el espacio
const bodies = ref<BodyModel[]>([
    new BodyModel(1000, 1000, 5, 1, -1, "#bdecb6"),
    new BodyModel(1200, 1000, 5, 1, -1, "#a18594"),
    new BodyModel(1400, 1000, 5, 1, -1, "#cca9dd"),
    new BodyModel(2000, 1000, 3000, 0, 0, "#ff0000"),
]);

// Método para calcular la distancia entre 2 cuerpos
const calculateDistanceBetween2Bodies = (body1: BodyModel, body2: BodyModel): number => {

    return Math.sqrt(
        Math.pow((body1.positionX - body2.positionX), 2) + Math.pow((body1.positionY - body2.positionY), 2)
    );
}

// Método para llevar a cabo cada bucle de la simulación.
// Se encarga de hacer los cálculos necesarios para determinar la evolución de la posición de los cuerpos en el
// espacio dado un lapso de tiempo.
const simulationLoop = async () => {

    while(true) {

        for(let i = 0; i < bodies.value.length; i++) {

            let acceleration : {x: number, y: number} = {x: 0, y: 0};

            for(let j = 0; j < bodies.value.length; j++) {
                
                // Hacemos los cálculos de cada bucle excluyendo cada cuerpo consigo mismo, ya que no tiene ninguna utilidad
                if(i != j) {

                    let body1 : BodyModel = bodies.value[i] as BodyModel;
                    let body2: BodyModel = bodies.value[j] as BodyModel;

                    // Hacemos los cálculos comunes a ambos cuerpos
                    let distance = calculateDistanceBetween2Bodies(body1, body2);

                    if(distance == 0) {
                        acceleration.x = 0;
                        acceleration.y = 0;

                        break;
                    }

                    let force = SimulationConstants.GRAVITY_CONSTANT * (body1.mass * body2.mass / Math.pow(distance, 2));

                    // Comenzamos con los cálculos vectoriales
                    acceleration.x += (force / body1.mass) * ((body2.positionX - body1.positionX) / distance);
                    acceleration.y += (force / body1.mass) * ((body2.positionY - body1.positionY) / distance);
                }
            }

            // Calculamos la velocidad
            bodies.value[i].velocityX += acceleration.x * deltaTime;
            bodies.value[i].velocityY += acceleration.y * deltaTime;

            // Actualizamos la posición
            bodies.value[i].positionX += bodies.value[i].velocityX * deltaTime;
            bodies.value[i].positionY += bodies.value[i].velocityY * deltaTime;
        }

        // Hacemos un delay para que el movimiento no sea instantáneo, sino progresivo
        await delay(1);
    }

}

</script>

<template>
    <div class="fondo">
        <p>ESTO ES LA SIMULACIÓN</p>
        <button @click="simulationLoop">MOVER</button>
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