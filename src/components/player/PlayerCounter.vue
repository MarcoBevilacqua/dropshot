<script setup>
import { reactive } from 'vue'

// reactive state
const state = reactive({score: 0})

const emit = defineEmits(['score-change'])

// functions that mutate state and trigger updates
function increment() {
    state.score++
    emit('score-change', state.score, props.playerId)
}

function decrement() {
    if(state.score === 0 ) return;
    state.score--;
    emit('score-change', state.score, props.playerId)
}

const props = defineProps({
    name: String,
    playerId: Number
})
</script>

<template>
    <div class="player">
        <h3 class="player-name">{{ name }}</h3>
        <div class="score">
            <h3>{{ state.score }}</h3>
            <div class="score-cmd">
                <button @click="decrement">-</button>
                <button @click="increment">+</button>
            </div>
        </div>
    </div>
</template>