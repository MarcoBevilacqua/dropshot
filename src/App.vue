<template>
  <div class="header">
    <h1>Dropshot</h1>
    <small>A squash point counter app</small>
  </div>

  <main>
    <div class="container">
      <score-table></score-table>
    </div>
  </main>
</template>

<script>
import ScoreTable from './components/match/ScoreTable.vue'

export default {
  components: {
    ScoreTable
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
}

@media (min-width: 520px) {
  .container {
    max-width: 480px;
  }
}

@media (min-width: 760px) {
  .container {
    max-width: 680px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 800px;
  }
}
</style>
