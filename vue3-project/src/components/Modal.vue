<template>
    <!-- event modifier oncliick -->
    <!-- self = only affected in this element only, not in child element -->
    <div class="backdrop" @click.self="closeModal">
        <!-- dynamic class -->
        <!-- key is classname -->
        <!-- value is check, if true apply class name -->
        <div class="modal" :class="{sale:theme === 'sale'}">
            <h1>{{iniPropData[0]}}</h1>
            <p>{{text}}</p>
        </div>
    </div>
</template>

<script>
// define props that using in this component
export default {
    name: 'Modal',
    props: ['iniPropData', 'text', 'theme'],
    methods: {
        closeModal() {
            // emit custom event,
            // param whatever name to it
            // this event will be set in any component as props with methods or data as parameters
            this.$emit('closeEmitEvent');
        }
    },
}
</script>

<style scoped>
    /* style scoped, this means only in affected in this component. not effect in root component or anything else*/
    .modal {
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        background: white;
        border-radius: 10px;
    }
    .backdrop {
        top: 0;
        position: fixed;
        background: rgb(148, 142, 142);
        width: 100%;
        height: 100%;
    }
    h1 {
        color: salmon;
        border: none;
        padding: 0;
    }
    /* ovveride global css */
    .modal p {
        font-style: normal;
    }
    .modal.sale {
        background: crimson;
        color: wheat;
    }
    .modal.sale h1 {
        color: whitesmoke;
    }
</style>