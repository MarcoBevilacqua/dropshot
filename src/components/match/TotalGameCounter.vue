<script setup>
const props = defineProps({
  game: Number
})
</script>

<template>
  <div>
    <span>Game: {{ props.game }}</span>
  </div>
</template>
