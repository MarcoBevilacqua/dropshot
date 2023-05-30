<template>
  <div class="header">
    <h1>Dropshot</h1>
    <small>A squash point counter app</small>
  </div>

  <main>
    <div class="container">
      <div id="score-table">

        <PlayerCounter name="Marco" :score="this.playerOneScore" />
        <PlayerCounter name="Player 2" :score="this.playerTwoScore" />

      </div>
    </div>    
  </main>
  
</template>

<script>

import PlayerCounter from './components/player/PlayerCounter.vue';

export default {
  components: {
    PlayerCounter
  },
  data() {
    return {
      playerOneScore: 0,
      playerTwoScore: 0,
    }
  }
}

</script>

<style scoped>

@media (min-width: 1024px) {

  .header {
    margin: 2rem auto;
    text-align: center;
  }

  .container {
    margin: 10px auto;
  }

  
}
</style>
