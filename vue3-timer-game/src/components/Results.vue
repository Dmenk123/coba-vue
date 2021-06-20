<template>
    <div class="card">
        <div class="card-container">
            <p>Reaction Time {{score}} ms</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Results',
    props: ['scoreProp'],
    data() {
        return {
            score : 0
        }
    },
    mounted() {
        this.score = this.scoreProp;
    },
}
</script>


<style>
   .card {
        margin: 0 auto; 
        float: none; 
        margin-bottom: 40px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        width: 40%;
        padding-bottom: 20px;
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    .card-container {
        padding: 2px 16px;
    }
</style>