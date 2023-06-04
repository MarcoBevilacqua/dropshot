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
  .header {
    margin: 2rem auto;
    text-align: center;
  }

  .container {
    margin: 10px 40px;
  }
}
</style>
