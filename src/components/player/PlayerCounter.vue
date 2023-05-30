<template>
    <div class="player">
        <h3 class="player-name">{{ name }}</h3>
        <div class="score">
        <h3>{{ score }}</h3>
        <div class="score-cmd">
            <span>-</span>
            <span>+</span>
        </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        name: String,
        score: Number
    }
}
</script>