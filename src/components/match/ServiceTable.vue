<script setup>
const emit = defineEmits(['toggleServiceTurn'])
</script>

<template>
  <div id="container">
    <button @click="emit('toggle-service-turn')">Change Service Turn</button>
  </div>
</template>

<style scoped>
#container {
  margin: auto 60px;
}
</style>
