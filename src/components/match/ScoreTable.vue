<script setup>
import { computed, defineComponent, reactive } from 'vue'
import PlayerCounter from '../player/PlayerCounter.vue'
import TotalGameCounter from '../match/TotalGameCounter.vue'

const state = reactive({
  canPlay: true,
  gameStatus: 'Still playing...',
  playerOneScore: 10,
  playerTwoScore: 9,
  gameIdx: 1
})

defineComponent({
  PlayerCounter,
  TotalGameCounter
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

    if(pointDiff.value === 2) {
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
}
</script>

<template>

  <total-game-counter :game="state.gameIdx"></total-game-counter>

  <div id="score-table">
    <PlayerCounter
      name="Marco"
      :playerId="1"
      :score="state.playerOneScore"
      @score-change="updateScore"
    />

    <PlayerCounter
      name="Player 2"
      :playerId="2"
      :score="state.playerTwoScore"
      @score-change="updateScore"
    />
  </div>

  <div id="score-status" style="text-align: center">
    <div>
      {{ pointTotal }}
    </div>
    <div>
      {{ state.gameStatus }}
    </div>
    <div v-if="!state.canPlay">
      <span>Match is closed</span>
      <button @click="nextGame">Reset Score</button>
    </div>
  </div>

  
</template>
