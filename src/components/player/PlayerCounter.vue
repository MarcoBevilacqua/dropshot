<script setup>
import { onMounted, reactive } from 'vue'

// reactive state
const state = reactive({score: 0})

// functions that mutate state and trigger updates
function increment() {
  state.score++
}

function decrement() {
  state.score--
}

defineProps({
    name: String,
    score: Number
})

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${state.score}.`)
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