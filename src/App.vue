<script setup>
</script>

<template>
  <div class="container">
    <div class="header">
      <div id="app">
        <h1>Dropshot</h1>
        <small>A squash point counter app</small>
      </div>
    </div>
    <main>
      <div class="container">
        <div id="score-table">
          <div class="player">
            <h3 class="player-name">Player 1</h3>
            <div class="score">
              <h3>0</h3>
              <div class="score-cmd">
                <span>-</span>
                <span>+</span>
              </div>
            </div>
          </div>
          <div class="player">
            <h3 class="player-name">Player 2</h3>
            <div class="score">
              <h3>0</h3>
              <div class="score-cmd">
                <span>-</span>
                <span>+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>

@media (min-width: 1024px) {

  .header {
    min-width: 100%;
    text-align: center;
  }

  .container {
    height: 100%;
    width: 100%;
    margin: 10px auto;
  }

  #score-table {
    display: grid;
    grid-template-columns: 1fr 1fr; 
  }
  
  .player {
    text-align: center;
    margin: 2rem 3rem;
  }

  .player-name h3 {
    font-weight: 700;
  }

  .score-cmd span {
    margin: .5rem
  }
}
</style>
