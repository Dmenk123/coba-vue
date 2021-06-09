const app = Vue.createApp({
    data: () => {
        // must return a data
        return {
            counterData: 0,
            name: 'Rizky',
            confirmedName: ''
        }
    },
    methods: {
        onIncrement() {
            this.counterData++;
        },
        onDecrement() {
            this.counterData--;
        },
        setName(event) {
            this.name = event.target.value;
        },
        submitForm() {
            alert('submitted');
        },
        setConfirmedName() {
            this.confirmedName = this.name;
        }
    },
});

app.mount('#app');