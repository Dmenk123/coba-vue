<template>
    <div class="block" v-if="showBlock" @click="stopTimer">
        click me
    </div>
</template>

<script>
export default {
    name: 'Block',
    props: ['delay'],
    data() {
        return {
            showBlock: false,
            timer: null,
            reactionTime: 0
        }
    },
    methods: {
        startTimer() {
            this.timer = setInterval(() => {
                this.reactionTime += 10;
            }, 10);
        },
        stopTimer() {
            clearInterval(this.timer);
            console.log(this.reactionTime);
            this.$emit('endTimer', this.reactionTime);
        }
    },
    mounted() {
       console.log('component mounted'); 
       setTimeout(() => {
           this.showBlock = true;
           this.startTimer();
            // console.log(this.delay);
       }, this.delay);
    },
    updated() {
        // execute whenever data is update
        console.log('data updated');
    },
    unmounted() {
        console.log('unmounted');  
    },
}
</script>

<style>
    .block {
        width: 400px;
        border-radius: 20px;
        background: rgb(55, 96, 96);
        color: wheat;
        text-align: center;
        padding: 100px 0;
        margin: 40px auto;
    }
</style>