const app = Vue.createApp({
    data: () => {
        // must return a data
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
        }
    },
    computed : {
        boxAClasses() {
            return {
                active : this.boxASelected
            };
        }
    },
    methods: {
        onBoxSelected(box) {
            if(box === 'A') {
                console.log('A '+this.boxASelected);
                // apply toggle
                this.boxASelected = !this.boxASelected;
            }else if(box === 'B'){
                console.log('B '+this.boxBSelected);
                this.boxBSelected = !this.boxBSelected;
            }else if(box === 'C'){
                console.log('C '+this.boxCSelected);
                this.boxCSelected = !this.boxCSelected;
            }
            
        }
    },
});

app.mount('#app');