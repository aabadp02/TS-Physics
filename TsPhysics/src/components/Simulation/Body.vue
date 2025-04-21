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

        color: {
            type: String,
            default: '#a52a2a'
        }
    });

</script>

<template>
    <div class="shape" :style="{background: color, top: positionY + 'px', left: positionX + 'px'}"/>
</template>

<style scoped>

    .shape {
        position: absolute;
        height: 25px;
        width: 25px;
        border-radius: 50%;
    }

</style>