<script setup>
import { computed, defineComponent, reactive } from 'vue'
import PlayerCounter from '../player/PlayerCounter.vue'
import TotalGameCounter from '../match/TotalGameCounter.vue'
import ServiceTable from './ServiceTable.vue'

const state = reactive({
  //match status
  canPlay: true,
  gameStatus: 'Still playing...',
  //player score
  playerOneScore: 0,
  playerTwoScore: 0,
  //game index
  gameIdx: 1,
  //service status
  serviceHold: 1,
  //service side
  serviceSide: true
})

defineComponent({
  PlayerCounter,
  TotalGameCounter,
  ServiceTable
})

const pointTotal = computed(() => {
  return state.playerOneScore + state.playerTwoScore
})

const pointDiff = computed(() => {
  return Math.abs(state.playerOneScore - state.playerTwoScore)
})

function updateScore(score, playerId) {
  if (state.canPlay) {
    if (playerId === 1) {
      score ? state.playerOneScore++ : state.playerOneScore--
    } else {
      score ? state.playerTwoScore++ : state.playerTwoScore--
    }

    //hands out
    if (state.serviceHold !== playerId) {
      state.serviceHold = toggleService()
    } else {
      //keep track of the side
      state.serviceSide = !state.serviceSide
    }
  }

  if (pointTotal.value > 10) {
    //check if a player won the game
    checkScore()
  }
}

function checkScore() {
  if (pointTotal.value === 20 && state.playerOneScore === 10) {
    //tie break
    state.gameStatus = 'Tie Break...'
  }

  if (pointDiff.value >= 2) {
    //someone has won

    let winner = checkWinner()
    if (winner > 0) {
      //should return the index of the winning player
      state.canPlay = false
      state.gameStatus = 'Winner is ' + winner
    }
  }
}

function checkWinner() {
  //check if either player 1 or 2 has won the game
  if (state.playerOneScore >= 11) return 1
  if (state.playerTwoScore >= 11) return 2
  return 0
}

function nextGame() {
  state.playerOneScore = state.playerTwoScore = 0
  state.canPlay = true
  state.gameStatus = 'Still playing...'
  state.gameIdx++
  state.serviceSide = true
}

function toggleService() {
  if (state.serviceHold === 1) return (state.serviceHold = 2)
  if (state.serviceHold === 2) return (state.serviceHold = 1)
}
</script>

<template>
  <total-game-counter :game="state.gameIdx"></total-game-counter>
  <div class="service-side">
    <div v-if="state.serviceSide" id="service-left">R</div>
    <div v-else id="service-right">L</div>
  </div>
  <service-table
    @toggle-service-turn="toggleService"
    :serviceHold="state.serviceHold"
  ></service-table>
  <div id="score-table">
    <PlayerCounter
      name="Marco"
      :playerId="1"
      :score="state.playerOneScore"
      :service="state.serviceHold"
      @score-change="updateScore"
      data-cy="player1-counter"
    />

    <PlayerCounter
      name="Player 2"
      :playerId="2"
      :score="state.playerTwoScore"
      :service="state.serviceHold"
      @score-change="updateScore"
      data-cy="player2-counter"
    />
  </div>

  <div id="score-status" style="text-align: center">
    <div class="score-status-container">
      <span data-cy="score-status" class="score-status-text">
        {{ state.gameStatus }}
      </span>
    </div>
    <div v-if="!state.canPlay">
      <div class="w-full">
        <span>Match is closed</span>
      </div>
      <button @click="nextGame">Reset Score</button>
    </div>
  </div>
</template>

<style scoped>
.service-side {
  width: 15px;
  text-align: center;
  border-radius: 4px;
  background-color: rgb(12, 146, 0);
  color: white;
  font-size: 13px;
  font-weight: 800;
}
</style>
