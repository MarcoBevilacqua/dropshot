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
@media (min-width: 1024px) {
  .container {
    max-width: 800px;
    margin: 0 auto;
  }
}

@media (max-width: 1024px) {
  .container {
    max-width: 720px;
    margin: 0 auto;
  }
}

@media (max-width: 400px) {
  .container {
    max-width: 370px;
    margin: 0 auto;
  }
}
</style>
