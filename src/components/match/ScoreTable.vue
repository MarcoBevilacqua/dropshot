<script setup>
import { defineComponent, reactive } from 'vue';
import PlayerCounter from '../player/PlayerCounter.vue';

const state = reactive({ 
    canPlay: true,
    playerOneScore: 0,
    playerTwoScore: 0,
})

defineComponent({
    PlayerCounter
})

function updateScore(score, playerId) { 

    if(state.canPlay) {
        if(playerId === 1){
            (score) ? 
            state.playerOneScore++ : state.playerOneScore--
        } else {
            (score) ? state.playerTwoScore++ : state.playerTwoScore--
        }
    }

    checkScore()
}

function checkScore() {
    if (state.playerOneScore === 11 || state.playerTwoScore === 11) {
        state.canPlay = false;
    }

    checkWinner()
}

function checkWinner() {
    //check if either player 1 or 2 has won the game
}
</script>

<template>
    <div id="score-table">

        <PlayerCounter name="Marco" 
        :playerId="1" :score="state.playerOneScore" 
        @score-change="updateScore" />

        <PlayerCounter name="Player 2" 
        :playerId="2" :score="state.playerTwoScore" 
        @score-change="updateScore" />

    </div>

    <div id="score-status" style="text-align: center">
        {{ state.playerOneScore }} - {{ state.playerTwoScore }}
        <div v-if="!state.canPlay">
            <span>Cannot play, match is closed</span>
        </div>
    </div>
</template>