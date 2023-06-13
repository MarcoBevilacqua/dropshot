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
    <div :class="{ invisible: service !== playerId }" class="ball">
      <div id="ball-point-left" class="ball-point"></div>
      <div id="ball-point-right" class="ball-point"></div>
    </div>
    <div class="score">
      <div style="display: flex; justify-content: center">
        <h3 :data-cy="'score-' + playerId">{{ props.score }}</h3>
      </div>
      <div class="score-cmd">
        <div class="inner">
          <a class="btn-dec left" :data-cy="'decrement-btn-' + playerId" @click="decrement"> - </a>
          <a class="btn-inc right" :data-cy="'increment-btn-' + playerId" @click="increment"> + </a>
        </div>
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
}

.ball-point {
  width: 4px;
  height: 4px;
  border-radius: 4px;
  background-color: yellow;
  position: relative;
}

#ball-point-left {
  left: 5px;
  top: 6px;
}

#ball-point-right {
  top: 2px;
  right: -15px;
}

@media (max-width: 400px) {
  .score-cmd {
    height: 1rem;
  }
  .btn-dec,
  .btn-inc {
    width: 0.5rem;
    height: 50%;
  }
}
</style>
