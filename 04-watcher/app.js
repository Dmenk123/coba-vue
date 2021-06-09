const app = Vue.createApp({
    data: () => {
        // must return a data
        return {
            counterData: 0,
            name: 'Rizky',
            lastName : 'Yuanda',
            confirmedName: '',
            fullName: '',
        }
    },
    watch : {
        // watch data property
        // watch name property must be same with data name property
        // if name data property modified, then this method executed
        name() {
            this.fullName = this.name + this.lastName;
        },
        lastName() {
            this.fullName = this.name + this.lastName;
        }
    },
    computed : {
        // fullName() {
        //     return this.name + ' Web Dev';
        // }
    },
    methods: {
        outputFullName() {
            console.log('exec full name');
            return this.name + ' Yuanda';
        },
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
            console.log(this.name);
        },
        setConfirmedName() {
            this.confirmedName = this.name;
        }
    },
});

app.mount('#app');