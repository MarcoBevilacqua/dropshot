<script setup>

import { ref } from 'vue';

const move = ref(true)
</script>

<template>
    <button @click="move = !move"> Move</button>
    <div id="container" >
        <div :class="{'to-the-right': move}" class="ball" ></div> 
    </div>

</template>

<style scoped>

    #container {
        width: 800px;
        margin: 20px 220px;
    }

    .ball {
        width: 50px;
        height: 50px;
        background-color: white;
        border-radius: 25px;
    }

    .to-the-right {
        float: right;
    }
    
</style>