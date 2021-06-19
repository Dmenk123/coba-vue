<template>
  <h1>{{title}}</h1>
  <!-- <input type="text" ref="name" /> -->
  <!-- <button @click="handleClick">click me (test $refs)</button> -->
  <p>Welcome...</p>

  <!-- send element via slot
  must be use component open and close tag
  slot without directive v-slot is default slot
  slot with directive v-slot is slot with name, and must inside template tag
  data will show in target component inside tag <slot></slot> -->
  <Card>
    <template v-slot:links>
      <a href="https://surabaya.go.id">Go</a>
      <a href="#"> More Info</a>
    </template>

    <h4><b>John Doe Dari Root Component (via slot)</b></h4> 
    <p>Architect & Engineer Dari Root Component (via slot)</p> 
  </Card>
 
  <div v-if="showModal">
    <!-- passing attr props in components -->
    <!-- if send data with data properties of component, bind props name -->
    <!-- closeEmitEvent is emit event from another component, pass a method to it then emit refference can be call in another component -->
    <Modal :iniPropData="propData" :text="text" theme="sale" @closeEmitEvent="toggleModal" />
  </div>
  
  <button @click="toggleModal">open modal</button>
</template>

<script>
import Modal from './components/Modal.vue'
import Card from './components/Card.vue'

export default {
  name: 'App',
  data : () => {
    return {
      title: 'My First Vue App',
      text: "Ini text dari root component",
      propData: ['rizky', 4, true],
      showModal: false
    }
  },
  methods: {
    handleClick() {
      // read refs
      console.log(this.$refs.name);
      // dom vanilla js method
      this.$refs.name.classList.add('active');
      this.$refs.name.focus();
    },
    toggleModal() {
      this.showModal = !this.showModal;
    }
  },
  components: {
    Modal, Card
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-block: 10px;
}

.actions a {
  color: #333;
  padding: 8px;
  border: 1px solid magenta;
  border-radius: 4px;
  text-decoration: none;
  margin: 10px;
}
</style>
