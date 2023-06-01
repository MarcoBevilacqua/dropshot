<script setup>
const props = defineProps({
  game: Number
})
</script>

<template>
  <div style="text-align: center;">
    <span>Game: {{ props.game }}</span>
  </div>
</template>