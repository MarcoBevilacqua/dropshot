<script setup>
import { computed, defineComponent, reactive } from 'vue'
import PlayerCounter from '../player/PlayerCounter.vue'
import TotalGameCounter from '../match/TotalGameCounter.vue'
import Toolbar from './Toolbar.vue'

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
  serviceSide: true,
  //games
  games: []
})

defineComponent({
  PlayerCounter,
  TotalGameCounter,
  Toolbar
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
      state.serviceSide = true
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
  state.canPlay = true
  state.gameStatus = 'Still playing...'
  state.gameIdx++
  state.serviceSide = true
  state.games.push({ playerOne: state.playerOneScore, playerTwo: state.playerTwoScore })
  state.playerOneScore = state.playerTwoScore = 0
}

function toggleService() {
  if (state.serviceHold === 1) return (state.serviceHold = 2)
  if (state.serviceHold === 2) return (state.serviceHold = 1)
  state.serviceSide = !state.serviceSide
}

function toggleServiceSide() {
  state.serviceSide = !state.serviceSide
}
</script>

<template>
  <total-game-counter :game="state.gameIdx"></total-game-counter>
  <Toolbar
    @toggle-service-turn="toggleService"
    :serviceHold="state.serviceHold"
    @toggle-service-side="toggleServiceSide"
    :serviceSide="state.serviceSide"
  ></Toolbar>
  <div id="score-table">
    <PlayerCounter
      name="Player 1"
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
      <h5>Game Status</h5>
      <span
        data-cy="score-status"
        class="score-status-text"
        :class="{
          'tie-break': state.gameStatus === 'Tie Break...',
          'game-over': !state.canPlay
        }"
      >
        {{ state.gameStatus }}
      </span>
    </div>
    <div v-if="!state.canPlay">
      <a class="dropshot-link" data-cy="reset-score-btn" @click="nextGame">Reset Score</a>
    </div>
  </div>
  <div id="game-count">
    <div v-for="(game, gameIdx) in state.games" :class="'game-history-' + (gameIdx + 1)">
      <h5 class="game-counter-title">Game {{ gameIdx }}</h5>
      {{ game.playerOne }} / {{ game.playerTwo }}
    </div>
  </div>
</template>

<style scoped>
.score-status-container h5 {
  margin-bottom: 4px;
}

.score-status-text {
  border-radius: 3px;
  border: 1px solid rgb(92, 92, 92);
  padding: 6px 12px;
}

.score-status-text.tie-break {
  background-color: yellow;
}

.score-status-text.game-over {
  background-color: green;
  color: white;
}

#game-count {
  margin-top: 24px;
  display: flex;
  justify-content: space-around;
}

#game-count div {
  width: 20rem;

  border: 1px solid gray;
  margin: 3px;
}
</style>
