<script setup>
import { reactive } from 'vue'
const state = reactive({
  //service side
  serviceSide: true
})
const emit = defineEmits(['toggleServiceTurn'])
</script>

<template>
  <div id="toolbar" style="display: flex; justify-content: space-between; align-items: center">
    <div id="left">
      <div class="toolbar-item">
        <a @click="emit('toggle-service-turn')">Change Service Turn</a>
      </div>
      <div class="toolbar-item">
        <a @click="state.serviceSide = !state.serviceSide">Toggle service side</a>
      </div>
    </div>
    <div class="service-side">
      <span v-if="state.serviceSide" id="service-left">R</span>
      <span v-else id="service-right">L</span>
    </div>
  </div>
</template>

<style scoped>
#toolbar {
  height: 50px;
}

#toolbar #left {
  display: flex;
  justify-content: flex-start;
}

#toolbar #left .toolbar-item {
  font-size: 13px;

  color: white;
  margin-right: 3px;
}

.toolbar-item a {
  cursor: pointer;
  border-radius: 4px;
  background-color: hsla(160, 100%, 37%, 1);
  color: white;
  padding: 4px 10px;
}

.toolbar-item a:hover {
  background-color: hsla(160, 100%, 44%, 1);
}

.service-side {
  width: 22px;
  text-align: center;
  color: white;
  font-size: 14px;
  font-weight: bolder;
}

.service-side span {
  border-radius: 4px;
  background-color: rgb(0, 152, 190);
  padding: 4px 8px;
}
</style>
