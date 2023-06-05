<script setup>
const emit = defineEmits(['score-change'])

// functions that mutate state and trigger updates
function increment() {
  emit('score-change', true, props.playerId)
}

function decrement() {
  if (props.score === 0) {
    return
  }
  emit('score-change', false, props.playerId)
}

const props = defineProps({
  name: String,
  score: Number,
  playerId: Number,
  service: Number
})
</script>

<template>
  <div class="player">
    <h3 class="player-name">{{ name }}</h3>
    <div :class="{ invisible: service !== playerId }" class="ball"></div>
    <div class="score">
      <h3 :data-cy="'score-' + playerId">{{ props.score }}</h3>
      <div class="score-cmd">
        <button class="left" :data-cy="'decrement-btn-' + playerId" @click="decrement">-</button>
        <button class="right" :data-cy="'increment-btn-' + playerId" @click="increment">+</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.invisible {
  visibility: hidden;
}

.ball {
  width: 25px;
  height: 25px;
  background-color: black;
  border-radius: 25px;
  float: right;
}
</style>
