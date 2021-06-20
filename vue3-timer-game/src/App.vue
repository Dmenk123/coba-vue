<template>
  <h1>Ninja Reaction Timer</h1>
  <button @click="start" :disabled="isPlaying">play</button>
  <Block v-if="isPlaying" :delay="delay" @endTimer="endGame"/>
  <Results v-if="showResult" :scoreProp="score"></Results>
</template>

<script>
// challenge
//   - when the game ends, show the result component
//   - output the score inside the result component

import Block from './components/Block.vue'
import Results from './components/Results.vue'

export default {
  name: 'App',
  components: {Block, Results},
  data() {
    return {
      isPlaying : false,
      delay : null,
      score : null, 
      showResult : false
    }
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
      this.showResult = false;
      //console.log(this.delay);
    },
    endGame(reactionTime) {
       this.score = reactionTime;
       this.isPlaying = false;
       this.showResult = true;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
</style>
