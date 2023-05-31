<script setup>

const emit = defineEmits(['score-change'])

// functions that mutate state and trigger updates
function increment() {
    emit('score-change', true, props.playerId)
}

function decrement() {
    if(props.score === 0) {
        return
    }
    emit('score-change', false, props.playerId)
}

const props = defineProps({
    name: String,
    score: Number,
    playerId: Number
})
</script>

<template>
    <div class="player">
        <h3 class="player-name">{{ name }}</h3>
        <div class="score">
            <h3>{{ props.score }}</h3>
            <div class="score-cmd">
                <button class="left" @click="decrement">-</button>
                <button class="right" @click="increment">+</button>
            </div>
        </div>
    </div>
</template>