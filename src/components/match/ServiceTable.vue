<script setup>
const props = defineProps({
  serviceHold: Number
})

const emit = defineEmits(['toggleServiceTurn'])
</script>

<template>
  <button @click="emit('toggle-service-turn')">Change Service Turn</button>
  <div id="container">
    <div :class="{ 'to-the-right': serviceHold > 1 }" class="ball"></div>
  </div>
</template>

<style scoped>
.ball {
  width: 50px;
  height: 50px;
  background-color: black;
  border-radius: 25px;
}

.to-the-right {
  float: right;
}
</style>
