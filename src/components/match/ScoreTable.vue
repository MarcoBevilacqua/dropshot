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

    if(playerId === 1){
        state.playerOneScore = score
    } else {
        state.playerTwoScore = score
    }

    checkScore()
}

function checkScore() {
    if (state.playerOneScore === 11 || state.playerTwoScore === 11) {
        state.canPlay = false;
    }
}
</script>

<template>
    <div id="score-table">

        <PlayerCounter name="Marco" :playerId="1" 
        @score-change="updateScore" />

        <PlayerCounter name="Player 2" :playerId="2" 
        @score-change="updateScore" />

    </div>

    <div id="score-status" style="text-align: center">
        {{ state.playerOneScore }} - {{ state.playerTwoScore }}
        <div v-if="!state.canPlay">
            <span>Cannot play, match is closed</span>
        </div>
    </div>
</template>